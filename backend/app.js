const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const authRoutes = require("./routes/authuser");

const dbConnection = require("./index")

const cors = require('cors');

const app= express();



app.use(bodyParser.json());

app.use(cors());

app.use('/api/authuser',authRoutes);

const port = 4000;

app.listen(port,()=>{
    console.log(`Server Is Running On Port ${port}`);
});


