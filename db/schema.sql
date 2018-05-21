DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users
(

  id SERIAL PRIMARY KEY,
  username TEXT,
  email VARCHAR (300) UNIQUE NOT NULL,
  password VARCHAR (300) NOT NULL,
  pic_url TEXT
);

CREATE TABLE favorites
(
  drink_id SERIAL PRIMARY KEY,
  drink_name TEXT NOT NULL,
  image_url TEXT,
  ingredients TEXT,
  instructions TEXT,
  user_id INT REFERENCES users (id)
);
