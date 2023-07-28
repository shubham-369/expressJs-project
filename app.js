const express = require("express");
const app = express();
const port =  4500;

app.use((req, res, next)=>{
    console.log("in the first middleware");
    next();
})
app.use((req, res, next)=>{
    res.send("in the second middleware");
})


app.listen(port);