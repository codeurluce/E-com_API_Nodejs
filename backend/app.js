const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

mongoose.connect('mongodb+srv://Luce:KlBGzSYKWhzK6Kxd@cluster0.b7bgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error));

const app = express();

// Middleware for parsing incoming JSON
app.use(express.json());

// CORS setup
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Route handling
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

// Static file serving for images
console.log(path.join(__dirname, 'controllers', 'images'));

app.use('/images', express.static(path.join(__dirname, 'controllers', 'images')));


module.exports = app;