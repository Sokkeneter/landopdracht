// app.js
const express = require('express');

// Create Express app
const app = express();

app.use(express.static(__dirname))
app.get('/', function (req, res) {
    res.sendFile(("index.html"), {__dirname})
})

const port = process.env.PORT || 3000;

app.listen(port)
//https://stackoverflow.com/questions/28706180/setting-the-port-for-node-js-server-on-heroku
//literally know nothing about express
//why didnt they teach me this in school
