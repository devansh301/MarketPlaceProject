const express = require('express') ;
const app = express() ;
const env = require('dotenv') ;

//environment variables or we can say constants
env.config() ;

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
});


