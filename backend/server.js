const { Router, json } = require("express")
const cors = require('cors')
const express = require("express")
const router = express.Router()
const contactRoute = require('./routes/contactRoutes')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const db = require('./db.js')
const cookieParser = require('cookie-parser')
const multer = require('multer')

const app = express()
// ADD THIS

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/posts', postRoutes)

// ==========Upload Images==========
// =======Create Storge========
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"../frontend/public/upload")
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now()+ file.originalname)
    }
})
const upload = multer({storage})
// ========Upload image API================
app.post('/upload',upload.single("file"),(req,res)=>{
    const file = req.file;
    // const file = "image.jpg";
    res.status(200).json(file.filename);
})


app.listen(4000, ()=>console.log('Backend Server is Runing on Port 4000'))












// ============Create Database=================
// app.get('/cdb', (req,res)=>{
//   const q = "CREATE DATABASE demoDB";
//   db.query(q,(error,data)=>{
//     if(error) return res.status(500).json(error)
//     console.log({success:"Database Created"})
//     console.log(data)
//   })
// })
// ================Create user Table==================
// app.get('/ctb',(req,res)=>{
//   const q = "CREATE TABLE users(id int NOT null AUTO_INCREMENT, name varchar(45), email varchar(45), password varchar(255), PRIMARY key(id))"
//   db.query(q, (error, data)=>{
//     if(error) return res.status(500).json(error)
//     console.log(data)
//     console.log({success:"Table Created Successfully!"})
//   })
// })
// ==========Insert New User in User Table===================
// app.post('/int',(req,res)=>{
//   const q="INSERT INTO `users`(name, email, password) VALUES (?)"
//   const values=[req.body.name, req.body.email, req.body.password]
//   db.query(q,[values], (error, data)=>{
//     if(error) return res.status(500).json(error)
//     console.log(data);
//     console.log({success:"User Created Successfully!"})
//   })
// })

// // ==================Drop Table==================
// app.get('/dt',(req,res)=>{
//   const q ="DROP TABLE users";
//   db.query(q,(error,data)=>{
//     if(error) throw error;
//     console.log("table Droped!")
//   })
// })

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// CREATE TABLE Persons (
//     PersonID int,
//     LastName varchar(255),
//     FirstName varchar(255),
//     Address varchar(255),
//     City varchar(255)
// );
// CREATE TABLE Orders (
//     OrderID int NOT NULL,
//     OrderNumber int NOT NULL,
//     PersonID int,
//     PRIMARY KEY (OrderID),
//     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// );
