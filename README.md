# CIT 31300 Final Project: Lego Store
This is a multi-page React shopping website.

- There's a default list of four products located in a redux store
- The web app has three pages. There's a nav at the top of the page with links to each page and it highlights the current link of the page you're on
    - Store Page '/'
      - Lists 4 products
        - Default 4 products have images
        - Products have a name, stock, and price value
        - If its stock is 10 or lower, its background color turns blue
      - When you click on a product, it opens a modal that only shows that product and its specific information. When you click off the modal, it closes
        - Name
        - Stock
        - Price (numerical value)
        - A button that adds this item to the cart
          - Users can place an item into their cart if the stock is not 0
          - If the stock is 0, the button does not appear
    - Cart Page '/cart'
      - Shows all items in a user's cart
        - Each item is shown with its name and price 
        - Users can delete the item from their cart
      - All of the items' prices are added up and the user is shown their total price
        - A purchase button (only displays if items are in the cart)
        - When the purchase button is clicked it returns you to the store page
      - Each item that was in the user's cart is emptied from the cart
    - Admin Page '/admin'
      - Allows the administrator to add an item to the store
