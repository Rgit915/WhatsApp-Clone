//Import express module
const express = require('express');
// Import Server class from socket.io for handling WebSocket connections
const { Server } = require('socket.io');
// Import helmet for setting various HTTP headers to enhance security
const helmet = require('helmet');
const cors = require('cors')

const port = 4000;

// Create an instance of the express app
const app = express();

// Create a server that handles both HTTP and socket.io requests
const server = require("http").createServer(app);

// Create a socket.io instance attached to the server, with CORS configuration
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// Add middleware - Use helmet
app.use(helmet());

//Enable CORS middleware to handle cross-origin HTTP requests
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from this origin
  credentials: true, //Include credentials (e.g., cookies) in cross-origin requests
}))

// Parse JSON requests
app.use(express.json());

// Define a route for handling HTTP GET requests to the root path '/'
app.get('/', (request, response) => {

  response.json("Express server!");
});

// Handle WebSocket connections when a client connects to the server
io.on("connect", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Send a welcome message to the connected client
  socket.emit("message", "Welcome to the WebSocket server!");
});



// Start the express app and make it listen on the specified port
app.listen(port, () => {
  console.log(`server listening on ${port}`);
})

