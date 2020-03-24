const path = require('path');
const express = require('express');
const app = express(); // Create an express application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Use the public directory to serve up all of our static assets
app.use(express.static(publicPath));

// If it isn't in the public folder just give back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Start on port 3000 // Updated for Heroku
app.listen(port, () => {
    console.log('Server is up!');
});
