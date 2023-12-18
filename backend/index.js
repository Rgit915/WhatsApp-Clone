//Import express module
const express = require('express');

const port = 8080;

// Create an instance of the express app
const app = express();

// Define a route for handling HTTP GET requests to the root path '/'
app.get('/' ,(request, response) =>{

  response.send("Express server!")
})

// Start the express app and make it listen on the specified port
app.listen(port, () => {
  console.log(`server listening on ${port}`);
})

