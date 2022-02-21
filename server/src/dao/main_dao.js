process.env.ORA_SDTZ = 'UTC';

const fs = require('fs');
const oracledb = require('oracledb');
const dbConfig = require('../../config/db');
const {restartable} = require("nodemon/lib/config/defaults");

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


function getDate() {
    function pad2(n) {
        return (n < 10 ? '0' : '') + n;
    }

    const date = new Date();
    const month = pad2(date.getMonth() + 1);//months (0-11)
    const day = pad2(date.getDate());//day (1-31)
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    return year + "/" + month + "/" + day + "T" + hour + ':' + minute + ':' + sec;
}

function convertKeysLowercase(obj) {
    let key, keys = Object.keys(obj);
    let n = keys.length;
    let result = {};
    while (n--) {
        key = keys[n];
        result[key.toLowerCase()] = obj[key];
    }

    return result;
}

function formatRow(rows) {
    const result = [];

    rows.forEach(row => result.push(convertKeysLowercase(row)))

    return result;
}

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

        return formatRow(result.rows);
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
    const date = getDate();

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

module.exports = {getAllProducts, getAllBooks, registerUser, checkout}
