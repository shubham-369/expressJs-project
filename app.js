const express = require("express");
const app = express();
const port =  4500;
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));

app.use(adminRoutes);

app.use(userRoutes);
app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port);