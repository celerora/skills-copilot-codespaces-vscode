// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file using the express module.

// The comments.json file contains an array of comments. Each comment has an id, username, and comment property.

// Use the fs module to read the comments.json file and send the comments as a response to the client.

// The server should respond to GET requests to the /comments route.

// The server should respond with the comments in JSON format.

// The server should respond with a status code of 200.

// If the comments.json file does not exist or there is an error reading the file, the server should respond with a status code of 500.

// Example usage:
// GET /comments
// Response:
// Status code: 200 OK
// Body:
// [
//   {
//     "id": 1,
//     "username": "alice",
//     "comment": "Hello!"
//   },
//   {
//     "id": 2,
//     "username": "bob",
//     "comment": "Hi!"
//   }
// ]

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
      return;
    }

    const comments = JSON.parse(data);
    res.status(200).json(comments);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


