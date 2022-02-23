process.env.ORA_SDTZ = 'UTC';

const fs = require('fs');
const oracledb = require('oracledb');
const dbConfig = require('../../config/db');
const helper = require('../lib/daoHelper')

let libPath; // [Linux]: export LD_LIBRARY_PATH=/path/to/your/instantclient_19_14:$LD_LIBRARY_PATH

if (process.platform === 'win32') {      // Windows
    libPath = 'C:\\oracle\\instantclient_19_14';
} else if (process.platform === 'darwin') {   // macOS
    libPath = process.env.HOME + '/Downloads/instantclient_19_8';
}
if (libPath && fs.existsSync(libPath)) {
    oracledb.initOracleClient({libDir: libPath});
}

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


async function getAllProducts() {
    const sql = `SELECT *
                 FROM PRODUCT`;

    return await connection.execute(sql, binds, options);
}

async function getAllBooks() {
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

async function registerUser({username, password, email}) {
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

async function checkout(username, products) {
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

async function getWishlistProducts(username) {
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

async function addProductIDToWishlist(username, productId) {
    const sql = `INSERT INTO WISHLIST (username, product_id) VALUES ('${username}', ${0})`;

    try {
        await connection.execute(sql, binds, options);
        return `[DB-WISHLIST] ${sql}`
    } catch (error) {
        console.log(error.message);
        console.log(sql)
        return error.message;
    }
}

async function removeProductIDFromWishlist(username, productID) {
    const sql = `DELETE FROM WISHLIST
                 WHERE username = '${username}' AND product_ID = ${productID}
                `;

    try {
        await connection.execute(sql, binds, options);
        return `[DB-WISHLIST] ${sql}`
    } catch (error) {
        throw error
    }
}


module.exports = {getAllProducts, getAllBooks, registerUser, checkout, getWishlistProducts, addProductIDToWishlist,
                removeProductIDFromWishlist}
