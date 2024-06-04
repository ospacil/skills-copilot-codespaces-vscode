// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments.js file
const comments = require('./comments');

// Set up the route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});