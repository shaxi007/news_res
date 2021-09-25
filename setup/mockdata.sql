INSERT INTO users
	(first_name,last_name,email,password,specialist)
VALUES ('Shaxboz','Teshayev','teshayevshaxboz62@gmail.com','assa7777','muxbir')
;

INSERT INTO lenguages(languag_name) 
VALUES('en'),('uz'),('ru');

INSERT INTO categories(categorie_name,languag_id)
VALUES('sport',2),('jahon yangiliklari',1),
	  ('turizm',1),('iqtisodiyot',2),('jamiyat',2),
	  ('o''zbekiston',2),('СПОРТ',3),
	  ('МИР',3);

INSERT INTO news(news_title,news_body,author_id,categorie_id,languag_id)
VALUES('«Ko‘chada o‘qimasdan «prava» olgan yuz minglab potensial qotillar yuribdi» – mutaxassis ayanchli YTHlar va Rossiyadan ko‘chirilgan yo‘l belgilari haqida',
'<h4 style="font-weight: bold;">Bugun, 24 sentabr kuni Oliy Majlis Senatining Mudofaa va xavfsizlik masalalari qo‘mitasi yig‘ilishi bo‘lib o‘tdi. Kun.uz muxbirining xabar berishicha, yig‘ilishda qo‘mita eksperti Nosirjon Zokirov yo‘l-transport hodisalari ko‘payib borayotgani va buning sabablari haqida gapirdi.</h4>',
1,3,2),
('Toshkentda tez yordam avtomobili ishtirokida YTH sodir bo‘ldi',
'<h4 style="font-weight: bold;">Ijtimoiy tarmoqlarda tez tibbiy yordam avtomobili ishtirokida YTH sodir bo‘lgani haqida ma''lumot tarqaldi. IIV YHXBB hodisa bo‘yicha xabar berdi.</h4>',
1,4,2);




