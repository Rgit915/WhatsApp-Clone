CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(28) NOT NULL UNIQUE,
  passhash VARCHAR(255) NOT NULL
);

INSERT INTO users(username, passhash) values
('example_user', 'bcrypt_hashed_password');