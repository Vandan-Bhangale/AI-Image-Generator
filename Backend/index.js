const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const mongodbStore = require('connect-mongodb-session')(session);
require('dotenv').config();

//Local modules
const routes = require('./routes/userRoutes');

const app = express();

//Mongo URI and ports
const URI = process.env.MONGODB_URI;
const PORT = 3000;

const store = new mongodbStore({
    uri: URI,
    collection: 'sessions'
});

app.use(cors({ origin: 'http://localhost:5173' ,credentials: true }));
app.use(express.json());

//Session for localhost
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24*60*60*1000
    },
    store
}));

//Using routes
app.use('/api',routes);


mongoose.connect(URI)
.then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT,() => {
        console.log(`Server is running on: http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(`Error connecting to MongoDB: ${err.message}`);
})
