const mysql = require("mysql");

const connectionMySQL = mysql.createPool({
    "host": process.env.MYSQL_HOST,
    "user": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE
});

module.exports = connectionMySQL;