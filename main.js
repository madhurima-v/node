// var username = "madhurima"
// console.log(username)


import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname+'\\public'))

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

app.listen(5000, function(req,res){
    console.log("server started at port number 5000")
})


