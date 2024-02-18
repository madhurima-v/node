// var username = "madhurima"
// console.log(username)


import express from 'express'
const app = express()
app.get('/',function(req,res){
    res.sendFile('C:\\Users\\Admin\\Documents\\New project\\views\\index.html')
})

app.get('/about',function(req,res){
    res.sendFile('C:\\Users\\Admin\\Documents\\New project\\views\\about.html')
})

app.get('/resume',function(req,res){
    res.sendFile('C:\\Users\\Admin\\Documents\\New project\\views\\resume.html')
})

app.get('/services',function(req,res){
    res.sendFile('C:\\Users\\Admin\\Documents\\New project\\views\\services.html')
})

app.get('/contact',function(req,res){
    res.sendFile('C:\\Users\\Admin\\Documents\\New project\\views\\contact.html')
})

app.listen(5000, function(req,res){
    console.log("server started at port number 5000")
})


