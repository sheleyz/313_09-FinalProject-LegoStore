# CIT 31300 #09 Final Project: The Fireplace Store
As your Final Project, you will be creating a multi-page react shopping website.

- You will create a default list of four products located in a redux store. When I refresh the page, any items added to the store do not need to continually exist.
- Your web app should be three pages. Provide a nav at the top of your page with links to each page. Should highlight the current link of the page you are on
    - Store Page '/'
      - Lists a least 4 products.
        - Default 4 products need to have images
        - Products have a name,  stock, and price values
        - If its stock is 10 or lower, its background color should be blue
      - When I click on a product, it should open a dialog window that only shows that product and its specific information. When I click off the dialog box, it should close the dialog window.
        - Name
        - Stock
        - Price (numerical value)
        - A button that adds this item to the cart.
          - Users should be able to place an item into their cart if the stock is not 0
          - If the stock is 0, the button should not appear
    - Cart Page '/cart'
      - Shows all items in users cart
        - Each item should be shown having its name, and price 
        - Users should be able to delete the item from their cart
      - All of the item's prices should be added up and show the users their total price
        - A purchase button ( only displays if items are in cart)
        - When clicked,  Then return to the store page
      - Each item that was in the user's cart is emptied from the cart
    - Admin Page '/admin'
      - Allow the administrator to add an item to the store

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
