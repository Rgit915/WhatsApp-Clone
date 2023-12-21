// Importing the 'Pool' class from the 'pg' module
const { Pool } = require('pg');

// Loading environment variables from a '.env' file
require("dotenv").config();

// Creating a new instance of the 'Pool' class with database connection parameters
const pool = new Pool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

module.exports = pool;