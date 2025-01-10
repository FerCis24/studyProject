const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    database: "tienda",
    password: "mysql15973",
});

module.exports = conection;