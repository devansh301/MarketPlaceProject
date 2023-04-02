const express = require(`express`);
const env = require(`dotenv`);
const app = express();
const bodyParser = require('body-parser');
const mongoose = require(`mongoose`);
// const User = require('./user.js');
//routes
env.config();
const userRoutes = require('./routes/user.js')

//environment variables or you can say constants
//mongodb connection
//mongodb+srv://root:<password>@cluster0.svln7ct.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://root:admin@cluster0.svln7ct.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('Database connected');
});

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${ process.env.PORT } `);
});