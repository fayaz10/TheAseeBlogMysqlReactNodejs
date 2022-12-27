const mysql = require('mysql')

 const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"mysqlblog"
})

db.connect((error)=>{
    if(error) return console.error("The Error:"+ error.message)
    console.log("Connected to MySQL Server!")
})

module.exports = db