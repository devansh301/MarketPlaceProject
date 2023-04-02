const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
env.config();
const userRoutes = require('./routes/user')



mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.d8vixml.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }
).then(()=>{
    console.log("mongoose connected");
});



app.use(bodyParser.urlencoded());
// app.use(express.urlencoded({ extended: true }))  --> may include
app.use(bodyParser.json());



app.use('/api',userRoutes);



// just testing the server
app.listen(process.env.PORT,() =>{
    console.log(`sever is running on port ${process.env.PORT}`);
});