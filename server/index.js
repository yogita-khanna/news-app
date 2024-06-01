import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config();
//components
// import Connection from './connection/db.js';
import mongoose from 'mongoose';
import Routes from './routes/Route.js';
import DefaultData from './default.js'

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Routes);
app.get('/hello', (req, res) =>{
    res.send('server running')
})
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 3001;

// Connection(username, password);
mongoose.connect('mongodb+srv://aryangupta005:aryan@clone-inshorts.pvz1mcg.mongodb.net/?retryWrites=true&w=majority&appName=clone-inshorts')
.then(()=>{
    app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
    // DefaultData();
})
.catch((err)=>{
    console.log(err);
})


