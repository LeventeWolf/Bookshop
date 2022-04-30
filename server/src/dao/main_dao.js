const oracledb = require("oracledb");
const helper = require('../lib/daoHelper')
const dbConfig = require("../../config/db");
const {log} = require("../lib/logger")

let connection;

(async () => {
    connection = await oracledb.getConnection(dbConfig);
})().catch(error => {
    console.log(error)
});

const binds = {};
const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT,   // query result format
    autoCommit: true
    // extendedMetaData: true,               // get extra metadata
    // prefetchRows:     100,                // internal buffer allocation size for tuning
    // fetchArraySize:   100                 // internal buffer allocation size for tuning
};


class dao {

    // User

    async getUser(username, password) {
        const sql = `SELECT username, email, firstname, lastname, avatar, is_member, is_admin
                     FROM CLIENT
                     WHERE username = '${username}'
                       AND ppassword = '${password}'`;

        try {
            const result = await connection.execute(sql, binds, options);

            if (!result.rows[0]) {
                console.log(`[DB] getUser: Invalid username or password!`)
                return undefined;
            }

            console.log(`[DB] getUser: ${username} found!`)
            return result.rows[0];
        } catch (error) {
            console.log(error.message);
            console.log(sql)
            return undefined;
        }
    }

    async getUserByUsername(username, password) {
        const sql = `SELECT username, email, firstname, lastname, avatar, is_member, is_admin
                     FROM CLIENT
                     WHERE username = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options);

            if (!result.rows[0]) {
                console.log(`[DB] getUser: Invalid username or password!`)
                return undefined;
            }

            console.log(`[DB] getUser: ${username} found!`)
            return result.rows[0];
        } catch (error) {
            console.log(error.message);
            console.log(sql)
            return undefined;
        }
    }

    async getAllProducts() {
        const sql = `SELECT *
                     FROM PRODUCT`;

        return await connection.execute(sql, binds, options);
    }

    async getProductByID(productID) {
        const sql = `SELECT *
                     FROM PRODUCT,
                          BOOK,
                          SONG
                     WHERE PRODUCT.ID = ${productID}`;

        try {
            const result = await connection.execute(sql, binds, options)
            return helper.formatRow(result.rows)[0];
        } catch (error) {
            console.log(error);
            console.log(sql)
            return [];
        }
    }

    // People who bought this product also bought these products
    async getRelatedProducts(productID) {
        const sql = `SELECT *
                     FROM WOLF.PRODUCT
                              LEFT JOIN WOLF.BOOK B on PRODUCT.ID = B.ID
                              LEFT JOIN WOLF.FILM F on PRODUCT.ID = F.ID
                              LEFT JOIN WOLF.SONG S on PRODUCT.ID = S.ID
                     WHERE WOLF.PRODUCT.ID IN (SELECT PRODUCT_ID
                                               FROM CLIENT_PURCHACES
                                                        INNER JOIN PURCHASE_INFO PI on CLIENT_PURCHACES.PURCHASE_ID = PI.PURCHASE_ID
                                               WHERE CLIENT_ID IN (SELECT CLIENT_ID AS "username"
                                                                   FROM PURCHASE_INFO
                                                                            INNER JOIN CLIENT_PURCHACES CP on PURCHASE_INFO.PURCHASE_ID = CP.PURCHASE_ID
                                                                   WHERE PRODUCT_ID = ${productID})
                                               GROUP BY PRODUCT_ID)`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    async getAllBooks() {
        const sql = `SELECT *
                     FROM PRODUCT
                              INNER JOIN BOOK ON BOOK.ID = PRODUCT.ID`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async registerUser({username, password, email}) {
        const sql = `INSERT INTO CLIENT (username, email, ppassword, FIRSTNAME, LASTNAME, AVATAR)
                     VALUES ('${username}', '${email}', '${password}', 'firstname', 'lastname', 'avatar')`;

        try {
            await connection.execute(sql, binds, options);
            console.log(`[DB-CLIENT] Register successful!`);
            return `[DB-CLIENT] Register successful!`;
        } catch (error) {
            console.log(error.message);
            console.log(sql)
            return `[DB-CLIENT] Error in Register!`;
        }
    }

    async checkout(username, products) {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let clientPurchaseID = await this.getLatestID('CLIENT_PURCHACES');
        clientPurchaseID = clientPurchaseID.LASTID + 1;
        if (!clientPurchaseID) {
            clientPurchaseID = 1;
        }

        const sql = `INSERT INTO PURCHASE (DELIVERY_OPTION, DDATE, STATUS, CLIENT_PURCHASE_ID)
                         VALUES ('UPS', TO_DATE('${date}','YYYY-MM-DD'), 'In Warehouse', ${clientPurchaseID})`;

        try {
            await connection.execute(sql, binds, options);
        } catch (error) {
            console.log(error.message);
            console.log(sql)
        }

        let purchaseID = await this.getLatestID('PURCHASE');
        purchaseID = purchaseID.LASTID;
        if (!purchaseID) {
            purchaseID = 1;
        }

        let cp_id = await this.getLatestID('CLIENT_PURCHACES');
        cp_id = cp_id.LASTID;
        if (!cp_id) {
            cp_id = 1;
        } else {
            cp_id += 1;
        }

        const sql2 = `INSERT INTO CLIENT_PURCHACES (CLIENT_ID, PURCHASE_ID, ID)
                         VALUES ('${username}', ${purchaseID}, ${cp_id})`;

        try {
            await connection.execute(sql2, binds, options);
        } catch (error) {
            console.log(error.message);
            console.log(sql2)
        }

        for (const product of products) {
            const sql = `INSERT INTO PURCHASE_INFO (PURCHASE_ID, PRODUCT_ID, QUANTITY)
                         VALUES (${purchaseID}, ${product.id}, ${product.quantity})`;

            try {
                await connection.execute(sql, binds, options);
            } catch (error) {
                console.log(error.message);
                console.log(sql)
            }
        }
    }

    async getLatestID(tableName) {
        const sql = `SELECT MAX(ID) AS LastID FROM ${tableName}`;

        let result = -1;

        try {
            result = await connection.execute(sql, binds, options);
            result = result.rows[0];
        } catch (error) {
            console.error(error);
            console.error(`[DAO] Error in getLatestID, see error above.`)
        }

        return result;
    }

    // Songs

    async getAllSongs() {
        const sql = `SELECT *
                     FROM PRODUCT
                              INNER JOIN SONG ON SONG.ID = PRODUCT.ID`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    // Wishlist

    async getWishlistProducts(username) {
        const sql = `SELECT *
                     FROM WISHLIST
                              LEFT JOIN PRODUCT ON WISHLIST.PRODUCT_ID = PRODUCT.ID
                              LEFT JOIN BOOK ON BOOK.ID = PRODUCT.ID
                              LEFT JOIN CLIENT ON CLIENT.USERNAME = WISHLIST.USERNAME
                     WHERE WISHLIST.USERNAME = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options)
            console.log(`[DB-WISHLIST] Selecting all products for user ${username}!`);
            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async addProductIDToWishlist(username, productId) {
        const sql = `INSERT INTO WISHLIST (username, product_id)
                     VALUES ('${username}', ${productId})`;

        try {
            await connection.execute(sql, binds, options);
            return `[DB-WISHLIST] ${sql}`
        } catch (error) {
            console.log(error.message);
            console.log(sql)
            return error.message;
        }
    }

    async removeProductIDFromWishlist(username, productID) {
        const sql = `DELETE
                     FROM WISHLIST
                     WHERE username = '${username}'
                       AND product_ID = ${productID}
        `;

        try {
            await connection.execute(sql, binds, options);
            return `[DB-WISHLIST] ${sql}`
        } catch (error) {
            throw error
        }
    }

    // Bestsellers

    async getBestsellers() {
        const sql = `SELECT DISTINCT *
                     FROM PRODUCT
                              INNER JOIN (SELECT PRODUCT_ID, SUM(QUANTITY) as "SOLD_AMOUNT"
                                          FROM PURCHASE_INFO
                                          GROUP BY PRODUCT_ID
                                          ORDER BY SOLD_AMOUNT DESC) SOLD ON SOLD.PRODUCT_ID = PRODUCT.ID
                              LEFT JOIN FILM F on PRODUCT.ID = F.ID
                              LEFT JOIN BOOK B on PRODUCT.ID = B.ID
                              LEFT JOIN SONG S on PRODUCT.ID = S.ID
                     ORDER BY SOLD.SOLD_AMOUNT DESC`

        try {
            const result = await connection.execute(sql, binds, options);
            // log(`[DB-BESTSELLER] Selecting bestsellers!`);
            return helper.formatRow(result.rows);
        } catch (error) {
            log(error);
            return [];
        }

    }

    // Featuring

    async getFeaturingProducts() {
        const sql = `SELECT *
                     FROM PRODUCT
                              LEFT JOIN BOOK B on PRODUCT.ID = B.ID
                              LEFT JOIN SONG S on PRODUCT.ID = S.ID
                              LEFT JOIN FILM F on PRODUCT.ID = F.ID
                     WHERE EXTRACT(YEAR FROM (TO_DATE(RELEASE, 'yyyy-mm-dd'))) = '2022'
                     ORDER BY RELEASE DESC`

        try {
            const result = await connection.execute(sql, binds, options);
            log(`[DB-BESTSELLER] Selecting featuringProducts!`);
            return helper.formatRow(result.rows);
        } catch (error) {
            log(error);
            return [];
        }

    }

    // Films

    async getAllFilms() {
        const sql = `SELECT *
                     FROM PRODUCT
                              INNER JOIN FILM ON FILM.ID = PRODUCT.ID`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Client

    async getClient(username) {
        const sql = `SELECT USERNAME, FIRSTNAME, LASTNAME, EMAIL, AVATAR
                     FROM CLIENT
                     WHERE USERNAME = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Address

    async getAddress(username) {
        const sql = `SELECT ADDRESS.CITY, ADDRESS.ZIPCODE, ADDRESS.STREET, ADDRESS.HOUSE_NUMBER
                     FROM CLIENT
                              INNER JOIN ADDRESS ON ADDRESS.ID = CLIENT.ADDRESS_ID
                     WHERE CLIENT.USERNAME = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Credit Card

    async getCard(username) {
        const sql = `SELECT NAME, CVC, EXPIRATION_DATE
                     FROM CREDIT_CARD
                     WHERE USERNAME = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Full Profile

    async getProfile(username) {
        const client = await this.getClient(username);
        const address = await this.getAddress(username);
        const card = await this.getCard(username);

        return {client: client[0], address: address[0], card: card[0]};
    }

    // Purchases

    async getPurchases(username) {
        const sql = `SELECT PURCHASE.*
                     FROM CLIENT_PURCHACES
                              INNER JOIN CLIENT on CLIENT_PURCHACES.CLIENT_ID = CLIENT.USERNAME
                              INNER JOIN PURCHASE on CLIENT_PURCHACES.PURCHASE_ID = PURCHASE.ID
                     WHERE USERNAME = '${username}'`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Purchase products

    async getPurchaseProducts(purchaseID) {
        const sql = `SELECT PRODUCT.*, PURCHASE_INFO.QUANTITY as B_QUANTITY
                     FROM PURCHASE_INFO
                              INNER JOIN PURCHASE on PURCHASE_INFO.PURCHASE_ID = PURCHASE.ID
                              INNER JOIN PRODUCT on PURCHASE_INFO.PRODUCT_ID = PRODUCT.ID
                     WHERE PURCHASE.ID = ${purchaseID}`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Purchases with products

    async getPurchasesWithProducts(username) {
        const purchases = await this.getPurchases(username);

        const result = [];

        for (const purchase of purchases) {
            purchase.products = await this.getPurchaseProducts(purchase.id);
            result.push(purchase);
        }

        return result;
    }

    async getStorages() {
        const sql = `SELECT *
                     FROM STORAGE`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Delete Storage

    async deleteStorage(storageID) {
        const sql = `DELETE
                     FROM STORAGE
                     WHERE ID = ${storageID}`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // Storage Products

    async getStorageProducts(storageID) {
        const sql = `SELECT PRODUCT.ID,
                            PRODUCT.PRICE,
                            PRODUCT.NAME,
                            PRODUCT.GENRE,
                            PRODUCT.RELEASE,
                            PRODUCT.IMAGEURL,
                            PRODUCT.LANGUAGE,
                            PRODUCT.DESCRIPTION,
                            PRODUCT.LONGNAME,
                            STORED_PRODUCTS.QUANTITY
                     FROM STORED_PRODUCTS
                              INNER JOIN PRODUCT on PRODUCT.ID = STORED_PRODUCTS.PRODUCT_ID
                     WHERE STORAGE_ID = ${storageID}`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async updateProduct(product) {
        const sql = `UPDATE PRODUCT
                     SET PRICE       = ${product.price},
                         NAME        = '${product.name}',
                         GENRE       = '${product.genre}',
                         RELEASE     = '${product.release}',
                         IMAGEURL    = '${product.imageurl}',
                         LANGUAGE    = '${product.language}',
                         DESCRIPTION = '${product.description}',
                         LONGNAME    = '${product.longname}'
                     WHERE ID = ${product.id}`;

        try {
            const result = await connection.execute(sql, binds, options)

            return helper.formatRow(result.rows);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

module.exports = {dao}