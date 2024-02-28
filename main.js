// var username = "madhurima"
// console.log(username)


import express from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'
import bodyParser from 'body-parser'

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(__dirname+'\\public'))

app.use(bodyParser.urlencoded({ extended: true }))


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  });
  
  var mailOptions = {
    from: 'madhurima.v@somaiya.edu',
    to: 'darsh10@somaiya.edu',
    subject: 'Darsh',
    text: 'GET LOST'
  };

app.get('/',function(req,res){
    res.sendFile(__dirname+'\\views\\index.html')
})

app.get('/about',function(req,res){
    res.sendFile(__dirname+'\\views\\about.html')
})

app.get('/resume',function(req,res){
    res.sendFile(__dirname+'\\views\\resume.html')
})

app.get('/services',function(req,res){
    res.sendFile(__dirname+'\\views\\services.html')
})

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'\\views\\contact.html')
})

app.post('/contact',function(req,res){
    console.log('hello');
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      console.log(req.body.email)
})

app.listen(5000, function(req,res){
    console.log("server started at port number 5000")
})


