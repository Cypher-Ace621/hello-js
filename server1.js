require("dotenv").config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

// serve the static file
app.use(express.static(path.join(__dirname, 'public')));

// serve the main page
app.get('/about', (req, res) => {
   res.sendFile(path.join(__dirname. 'views'. 'index.html'));
});

app.get('/about', (req, res) => {
   res.send("Hello");
})

app.listen(PORT, () => {
   console.log(`server running on http://localhost:${PORT}`);
});