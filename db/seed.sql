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
VALUES ('Gin Daisy',
        'https://www.thecocktaildb.com/images/media/drink/qwxysv1478819943.jpg',
        'Gin, Lemon juice, Sugar, Grenadine, Maraschino cherry, Orange',
        'In a shaker half-filled with ice cubes, combine the wine, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.',
        1),
       ('Gin Cooler', 'https://www.thecocktaildb.com/images/media/drink/wsyrvv1478820109.jpg',
        'Carbonated water, Powdered sugar, Orange spiral, Lemon peel',
        'Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.',
        1),
       ('Jack''s Vanilla Coke',
        'https://www.thecocktaildb.com/images/media/drink/kjnt7z1504793319.jpg',
        'Ice, Tennessee whiskey, Vanilla extract, Coca-Cola',
        'After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.',
        2),
       ('Vodka Martini',
        'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg',
        'Vodka, Dry Vermouth, Olive',
        'Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.',
        2),
       ('Cherry Rum',
        'https://www.thecocktaildb.com/images/media/drink/twsuvr1441554424.jpg',
        'Light rum, Cherry brandy, Light cream',
        'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        3);
       ;
