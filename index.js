const express = require('express');
const postsRoute = require('./routes/posts');
const app = express();
const port = 3000;
require('dotenv').config();
const bodyParser = require('body-parser');


//connect to database
const mongoose = require('mongoose');

//connect to database   
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to database');
}); 


app.get('/', (req, res) =>{
        res.send('Hello World!')
});

//Middleware
app.use('/posts', postsRoute);
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

