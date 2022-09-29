const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

const apiRoute = require('./routes/apiRoute')

PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Get Route for home page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET Route for api
app.use("/api", apiRoute)

// Linsen 
app.listen(PORT, ()=>{
    console.log(`App linsten at http://localhost:${PORT} 🚀`)
})