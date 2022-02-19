require('dotenv').config()

module.exports = {
    user          : process.env.NODE_ORACLEDB_USERNAME || 'your-username',
    password      : process.env.NODE_ORACLEDB_PASSWORD || 'your-password',
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost/XE',
};