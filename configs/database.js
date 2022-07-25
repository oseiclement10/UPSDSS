require('dotenv').config();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host:process.env.mysql_host,
    user:process.env.mysql_user,
    database:process.env.mysql_database,
    password:process.env.mysql_database_password,
});

module.exports = connection;