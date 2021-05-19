var mysql = require('mysql');

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"forum"
})
connection.connect();
module.exports=connection;