const db = require('../config/db');

class DAO {
    // Books
    async getAllBooks() {
        const rows = await db.pool.query(`
            SELECT *,
            FROM books
        `);

        return rows.splice(0);
    }
}

module.exports = DAO