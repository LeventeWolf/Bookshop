const oracledb = require("oracledb");
const helper = require('../lib/daoHelper')
const dbConfig = require("../../config/db");

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

    async getAllProducts() {
        const sql = `SELECT *
                     FROM PRODUCT`;

        return await connection.execute(sql, binds, options);
    }

    async getProductByID(productID) {
        const sql = `SELECT *
                     FROM PRODUCT
                              INNER JOIN BOOK ON BOOK.ID = PRODUCT.ID
                     WHERE BOOK.ID = '${productID}'`;

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

        result.forEach(message => console.log(message))
        return result;
    }


    // Wishlist

    async getWishlistProducts(username) {
        const sql = `SELECT *
                     FROM WOLF.WISHLIST
                              INNER JOIN PRODUCT ON WISHLIST.PRODUCT_ID = PRODUCT.ID
                              INNER JOIN BOOK ON BOOK.ID = PRODUCT.ID
                              INNER JOIN WOLF.CLIENT ON CLIENT.USERNAME = WISHLIST.USERNAME
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
}

module.exports = {dao}