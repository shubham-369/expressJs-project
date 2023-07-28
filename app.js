const express = require("express");
const app = express();
const port =  4500;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product',(req, res, next)=>{
    res.send('<!DOCTYPE html><html><head><title>My Page</title></head><body><form action="/product" method="POST"><input type="text" name="title"><br><br><input type="text" name="page"><br><br><button type="submit">Add product</button></form></body></html>');
})
app.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect("/");
})
app.use('/',(req, res, next)=>{
    res.send("hello from home page");
})

app.listen(port);