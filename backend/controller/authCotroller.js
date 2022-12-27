
const mysql = require('mysql')
const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')


const register = (req,res)=>{
    // chck if user alreday exsit
    const q = "SELECT * FROM `users` WHERE email=? OR name=?"
    // const values = [req.body.name, req.body.email]
    db.query(q,[req.body.email, req.body.name],(error, data)=>{
        if(error) return res.status(500).json(error)
        if(data.length) return res.status(409).json({error:"User alredy Exist!"})
      
        
    
        const q="INSERT INTO `users`(name, email, password) VALUES (?)"
        // to hash the user password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const values=[req.body.name, req.body.email, hash]

        db.query(q,[values], (error,data)=>{
            if(error) return res.status(500).json(error)
            return res.status(200).json({Success:"User Created Successfully!"})
        })

    })
}

const login = (req,res)=>{
    const q = " SELECT * FROM users WHERE name=?"
    db.query(q,[req.body.name], (error, data)=>{
        if(error) return res.status(500).json(error)
        if(data.length === 0) return res.status(404).json({error:"User not Found!"})

        const isPasswordCurrect = bcrypt.compareSync(req.body.password,data[0].password)

        if(!isPasswordCurrect)
        return res.status(400).json({error:"Wrong Password or User Name"})

        const token = jwt.sign({id:data[0].id},"jwtkey123")
        //to hide row password and show the user name and email
        const {password, ...other} = data[0]

        res.cookie("access_token",token,{httpOnly:true }).status(200).json(other)
         console.log('welcome user')
    })

    
}

const logout = (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,
    }).status(200).json("user Logout Successflly!")
    console.log('user Logout Successflly!')
}
module.exports = {
    register,login,logout
}