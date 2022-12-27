// const express  =  require('express')
// const nodemailer = require("nodemailer")


const contactRoutes = ()=>{
// const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     auth:{
//         user: 'fayaz.nasrat10@gmail.com',
//         pass: 'hbyravgsnoxztxfi'
//     }
// })

// contactEmail.verify((error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Ready To Send')
//     }
// })
// app.post("/contactEmail",(req, res)=>{
//    const name = req.body.name;
//    const lastName = req.body.lastName;
//    const phone = req.body.phone;
//    const email = req.body.email;
//    const sex = req.body.sex;
//    const docName = req.body.docName;
//    const message = req.body.message;

//    let resiver='';

//    switch(docName){
//     case 'جرحی':
//         resiver = 'hamza.nawabi119@gmail.com'
//         break;
//     case 'اطفال' :
//         resiver = 'zohaib.ayubi002@gmail.com'
//         break;
//     default:
//         resiver = "fayaz.nasrat10@gmail.com"
//    }

//    const mail = {
//     from : name,
//     to : resiver,
//     subject: "message sent form The Asee Blog",
//     html: `
//             User Name: <b>${name}</b><br/>
//             User LastName: <b>${lastName}</b><br/>
//             User Email: <b>${email}</b><br/>
//             User Sex: <b>${sex}</b><br/>
//             User Phone: <b>${phone}</b><br/>
//             User Doc: <b>${docName}</b><br/>
//             User Message: <b>${message}</b><br/>

//     `
//    };
//    contactEmail.sendMail(mail, (error)=>{
//     if(error){
//         res.json(error)
//     }else{
//         res.json("we recived your message!, we will contact you ASAP")
//     }
//    })
// })
}
module.exports= contactRoutes
