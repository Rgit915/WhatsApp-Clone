const express = require('express');
const validateForm = require('../controllers/validateForm');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// create a route for /login
router.post("/login", (req, res) => {
  validateForm(req, res);
});

// create a route for /signup
router.post("/signup", async (req, res) => {
  validateForm(req, res);

  // Check if the username already exists in the database
  const existingUser = await pool.query(
    "SELECT username FROM users WHERE username = $1",
    [req.body.username]
  );

  if (existingUser.rowCount === 0) {
   // If the username doesn't exist, register the new user
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUserQuery = await pool.query(
      "INSERT INTO users(username, passhash) values($1,$2) RETURNING username",
      [req.body.username, hashedPass]
    );
    res.json({ loggedIn: true, username });
  } else {
     // If the username already exists, send a response indicating it's taken
    res.json({ loggedIn: false, status: "Username taken" });

  }
});

module.exports = router;