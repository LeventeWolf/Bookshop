module.exports = {
    user          : "wolf",
    password      : process.env.NODE_ORACLEDB_PASSWORD,
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/XE",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};