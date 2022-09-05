const mysql = require('mysql');
const properties = require('./connectionProperties');

const dB = mysql.createConnection({
    host:properties.host,
    user:properties.user,
    password:properties.password,
    database:properties.database
});

module.exports = dB;