require('dotenv').config()

module.exports = {
    user          : process.env.NODE_ORACLEDB_USERNAME || 'wolf',
    password      : process.env.NODE_ORACLEDB_PASSWORD || 'yolo',
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost/XE',
};