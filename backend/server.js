const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

//mongoose db configuration
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>  { 
    console.log('MongoDB is connected ')
})

//adding routing files for the server
const usersRouter = require('./routes/user');
const exercisesRouter = require('./routes/exercise');

app.use('/exercise' , exercisesRouter);
app.use('/users' , usersRouter);


app.listen(port, () => {
    console.log(`Server is listening on the ${port}`);
})