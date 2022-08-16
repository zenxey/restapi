const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');
const port = 3000

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
        res.send('Hello World! This is a Home Page');
    })
    // app.listen(port, () => console.log(`Example app listening on port https://localhost:${3000}!`)) = require('express')

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!'));
app.listen(3000);

// DB_CONNECTION = mongodb+srv://<userName>:<Password>@<Cluster>.e3hjh.mongodb.net/<<ADD NAME OF COLLECTION YOU WANT TO FETCH IN POSTMAN>>?retryWrites=true&w=majority
