const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
env.config();
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')



mongoose.connect(
    //add username,password,database-name accordingly
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.d8vixml.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }
).then(()=>{
    console.log("mongoose connected");
});



app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: true }))  --> may include this
app.use(bodyParser.json());


// routes for users and admins
app.use('/api',authRoutes);
app.use('/api',adminRoutes);



// just testing the server
app.listen(process.env.PORT,() =>{
    console.log(`sever is running on port ${process.env.PORT}`);
});