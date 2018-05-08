\c drinkup

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users
(

  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE,
  email VARCHAR (300),
  password VARCHAR (300),
  pic_url TEXT
);

CREATE TABLE favorites
(
  drink_id SERIAL PRIMARY KEY,
  drink_name TEXT,
  image_url TEXT,
  ingredients TEXT,
  instructions TEXT,
  user_id INT REFERENCES users (id)
);
