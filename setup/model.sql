CREATE TABLE users(
	user_id INT generated always AS identity PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(60) NOT NULL,
	specialist VARCHAR(30) NOT NULL
);

CREATE TABLE lenguages(
	languag_id INT generated always AS identity PRIMARY KEY,
	languag_name VARCHAR(20) NOT NULL
);

CREATE TABLE categories(
	categorie_id INT generated always AS identity PRIMARY KEY,
	categorie_name VARCHAR(200) NOT NULL,
	languag_id INT REFERENCES lenguages(languag_id) ON DELETE CASCADE
);

CREATE TABLE news(
	news_id INT generated always AS identity PRIMARY KEY,
	news_title VARCHAR(300) NOT NULL,
	news_body TEXT NOT NULL,
	news_time timestamptz default current_timestamp,
	news_views INT DEFAULT 1,
	author_id INT  REFERENCES users(user_id) ON DELETE CASCADE,
	categorie_id INT REFERENCES categories(categorie_id) ON DELETE CASCADE,
	languag_id INT REFERENCES lenguages(languag_id) ON DELETE CASCADE
);
