const express = require('express');
const validateForm = require('../controllers/validateForm');
const router = express.Router();

// create a route for /login
router.post("/login", (req, res) => {
 validateForm(req, res);
});

// create a route for /signup
router.post("/signup", (req, res) => {
  validateForm(req, res);
});

module.exports = router;