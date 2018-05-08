# DrinkUp

## overview
So you are starting to notice that you like gin cocktails but you have no idea 
what goes in your favorite cocktail, OR maybe you want to try other gin based cocktails
but don't know their official names.  Here is where this app will improve your life.    
  
Our app is a database of cocktails including names, images and ingredients. In addition to 
listing cocktails our app can then help you find a happy hour in your neighborhood.  
  
A user goes to our website and is given the option to register if they
don't currently have an account or if they do have an account they can log right in.  
  
Once they have logged in they can search for cocktails based on ingredients and add
cocktails to their "favorites" list.  They can create a custom cocktail to store in their
favorites, delete from their favorites or edit cocktails within their favorites.  
  
Now that they have cocktails on the brain the user has the option to search for nearby 
Happy Hours based on their location.

## Wireframe
Located in wireframe folder.
## Pages/Components
+ Landing Page
+ User Register Page
+ User Login Page
+ Choose Find Drink or Find Happy Hour
+ Find Drink
    + Nav Bar
    + Search Bar
    + Drink Output List
+ My Fav Drinks
    + Nav Bar
    + Profile
    + Fav Drink List
+ Make A Drink/Edit a Drink
    + Nav Bar
    + Make Drink Empty Form
    + Edit Drink filled out Form
+ Happy Hour
    + Nav Bar
    + Input form
    + Mapped output
  
## TECHNOLOGIES  
+ Node.js and Express
+ React
+ SQL, Postgres
+ HTML, CSS, Javascript, jQuery

#### API FETCHES
+ Search By Category Alcoholic
    + https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
+ Search by drink ID
    + https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15346
