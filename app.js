// app.js
const express = require('express');

// Create Express app
const app = express();

app.use(express.static(__dirname))
app.get('/', function (req, res) {
    res.sendFile(("index.html"), {__dirname})
})

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'));
