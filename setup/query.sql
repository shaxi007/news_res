SELECT * FROM users WHERE email='teshayev@gmail.com' AND password='a1d18afc690074ab5fe7679dd1b19bcc'
UPDATE categories SET categorie_name='SPORT' WHERE categorie_id=1
	RETURNING *

WITH old_data AS (
		SELECT * FROM news
	)
	UPDATE news SET 
	news_views= CASE 
					WHEN TRUE THEN old_data.news_views+1
					ELSE old_data.news_views
				END,
	news_title = CASE 
					WHEN length('test')>1 THEN 'test'
					ELSE old_data.news_title
				END,
	news_body = CASE 
					WHEN length('<b>test</b>')>1 THEN '<b>test</b>'
					ELSE old_data.news_body
				END,
	author_id = CASE 
					WHEN 5>1 THEN 5+1
					ELSE old_data.author_id
				END
	FROM old_data
	WHERE news.news_id=1
	RETURNING news.*;		



