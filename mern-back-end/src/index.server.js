const express = require('express') ;
const app = express() ;
const env = require('dotenv') ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');



//environment variables or we can say constants
env.config() ;



//mongodb connection 
//mongodb+srv://deveshpe:<password>@cluster0.wlxadeh.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.fnsbz9d.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true ,
        //useCreateIndex: true
    }
).then(() => {
    console.log('Database Connected');
});

app.use(bodyParser.urlencoded());
// app.use(express.urlencoded({ extended: true }))  --> may include

app.use(bodyParser.json());

app.use('/api', authRoutes); 
app.use('/api', adminRoutes); 

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
});


