\c drinkup


INSERT INTO users (username, email, password, pic_url)
VALUES ('username1',
        'email1@.com',
        'pw1',
        'https://pbs.twimg.com/profile_images/2275441542/i3d5t1j5wtejm4qgb3kq_400x400.jpeg' ),
       ('username2',
        'email2@.com',
        'pw2',
        'https://pbs.twimg.com/profile_images/2275441542/i3d5t1j5wtejm4qgb3kq_400x400.jpeg' ),
       ('username3',
        'email3@.com',
        'pw3',
        'https://pbs.twimg.com/profile_images/2275441542/i3d5t1j5wtejm4qgb3kq_400x400.jpeg' );

INSERT INTO favorites (drink_name, image_url, ingredients, instructions, user_id)
VALUES ('margarita', 'http://25.media.tumblr.com/729d8ed33887c79fe55efb39c57d81b4/tumblr_mg5wl7Wv8t1qgm4hdo1_250.jpg', 'lime and tequila', 'blend with ice', 1),
       ('martini', 'http://25.media.tumblr.com/729d8ed33887c79fe55efb39c57d81b4/tumblr_mg5wl7Wv8t1qgm4hdo1_250.jpg', 'gin and vermouth', 'shaken, not stirred', 2),
       ('Jack Honey Ginger', 'http://25.media.tumblr.com/729d8ed33887c79fe55efb39c57d81b4/tumblr_mg5wl7Wv8t1qgm4hdo1_250.jpg', 'Jack Daniels - Honey, and gingerale', 'mixed 50/50', 2);
       ;
