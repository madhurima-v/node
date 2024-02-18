// var username = "madhurima"
// console.log(username)


import express from 'express'
const app = express()
app.get('/',function(req,res){
    res.write('<h1>homepage loaded</h1>')
    res.send()
})

app.get('/about',function(req,res){
    res.write('<h1><a href="http://localhost:5000/resume">aboutpage loaded</a></h1>')
    res.send()
})

app.get('/resume',function(req,res){
    res.write('<h1>resumepage loaded</h1>')
    res.send()
})

app.get('/services',function(req,res){
    res.write('<h1>servicespage loaded</h1>')
    res.send()
})


app.listen(5000, function(req,res){
    console.log("server started at port number 5000")
})


