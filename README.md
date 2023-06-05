# Link to the deployed project: https://cart-project-5abcb.web.app/

# OVERWIEW:

So far I have finished 2 levels "base" and "middle".
1) the "shops" data is fetched from the "Firebase database";
![image](https://github.com/TarasCoder/product-list/assets/66311545/c15192b6-ce38-4f46-9cf7-05d94e6efd00)
2) After the order is submitted, the data is saved to the "Firestore database":
![image](https://github.com/TarasCoder/product-list/assets/66311545/beb5b7ec-3fe9-4dae-bced-52d9501efad2)
3) all the products from each separate shop can be added to the cart (after the button is pressed "Alert" is showing the product is added);
4) as soon as you will choose a product in one shop - all others will be blocked;
5) the cart is saved to "Local Storage";
6) you will be able to choose items from another shop only when you will delete all the products from the cart;
7) based on the previous comment obviously you can delete items from the cart;
8) there are 2 pages, that are changed without rerendering the whole site;
9) as soon as the product will be added to the cart - the total price will be changed (located on the cart page);
10) as soon as you will change the quantity of each product (inside the cart), you will see the dynamically changed price on the changed card itself, and the total price as well;
11) you can not make quantity below 0;
12) submit button is blocked till the moment you will add any product to the cart;
13) as soon as you will remove the last product from the cart, submit button will be blocked;
14) you can not send data to the database when the inputs are not set;
15) after the order is sent, all fields, price, and cart are cleared.

# WHAT SHOULD BE IMPROVED:

1) add modal windows instead of alerts;
2) add more styling, so it will look great;
3) responsiveness;
4) add "advanced" level.

# INSTRUCTIONS:

1) DEPLOYING to firebase instructions:
Step 0): npm run build (For React App)
Step 1): npm install -g firebase-tools
Step 2): firebase login (If you are already login, then there is no need for this step)
Step 3): firebase init
Step 4): Are you ready to proceed? Yes
Step 5): What do you want to use as your public directory? dist
Step 6): Configure as a single-page app (rewrite all urls to /index.html)? Yes
Step 7): Set up automatic builds and deploys with GitHub? No
Step 8): File dist/index.html already exists. Overwrite? No
Step 9): firebase deploy
from here: https://github.com/coreui/coreui-react/issues/55

2) To run the project locally download files, install dependencies "npm i", and run the project using "npm run dev"
