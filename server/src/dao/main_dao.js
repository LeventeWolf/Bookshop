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

    async getUser(username, password) {
        const sql = `SELECT username, email, firstname, lastname, avatar, is_member
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
        const result = []
        const date = helper.getDate();

        for (const product of products) {
            const sql = `INSERT INTO PURCHASE (username, productId, quantity, pdate)
                         VALUES ('${username}', ${product.id}, ${product.quantity}, '${date}')`;

            try {
                await connection.execute(sql, binds, options);
                const message = `[DB-PURCHASE] ${sql}`;
                result.push(message);
            } catch (error) {
                result.push(error.message);
                console.log(error.message);
                console.log(sql)
            }
        }

        result.forEach(message => log(message))
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
                              INNER JOIN (SELECT PRODUCTID, SUM(PURCHASE.QUANTITY) as "SOLD_AMOUNT"
                                          FROM PURCHASE
                                          GROUP BY PRODUCTID
                                          ORDER BY SOLD_AMOUNT DESC) SOLD ON SOLD.PRODUCTID = PRODUCT.ID

                              LEFT JOIN BOOK B on PRODUCT.ID = B.ID
                              LEFT JOIN SONG S on PRODUCT.ID = S.ID
                     ORDER BY SOLD.SOLD_AMOUNT DESC`

        try {
            const result = await connection.execute(sql, binds, options);
            log(`[DB-BESTSELLER] Selecting bestsellers! [1-5]`);
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
        const sql = `SELECT PRODUCT.*
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

        console.log(result);

        return result;
    }
}

module.exports = {dao}