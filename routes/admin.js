const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send('<!DOCTYPE html><html><head><title>My Page</title></head><body><form action="/product" method="POST"><input type="text" name="title"><br><br><input type="text" name="page"><br><br><button type="submit">Add product</button></form></body></html>');
})

router.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;