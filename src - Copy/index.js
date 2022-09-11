const dotenv = require('dotenv');
const express = require('express');
const route = require('./routes/routes');
const PORT = 3000;
const app = express();
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/userDataCreate",
{useNewUrlParser:true})
.then( ()=>console.log("mongodb connect"))
.catch(err=>console.log(err))
app.use('/',route);
app.listen(PORT, () =>{
    console.log(`express is running on ${PORT}`);
})
