# Bamazon

##Overview

In the Bamazon App, there are two different views, or experiences, which will be described in more detail below. The first is the Customer view, or experience. In here the customer selects an item to purchase. This action also triggers an automatic update to the database. In the Manager view, or experiece, the manager is able to complete several functions including the ability to view all the products for sale, update the quantity of each item manully (versus the automatic recalculation that occurs when a sale is made), and add new products to the inventory.  

##Customer View (bamazonCustomer.js)

In this view: 
--Upon running the file in node, the customer is greeted and given a list of all the items available to purchase, asking which item they want to purchase. 
--The customer selects the number associated with the item. 
--They are then promted to enter how many they want, and based on their input, are then infromed if there are that many in stock.  
--If not, they are prompted to selected a different quantity or another item. 
--If there are that many in stock they are given their total for that order and asked if they wish to make another purchase. 
--If they do, this process is repeated-begining with the welcome greeting and presents the items for sale. 
--If they do not wish to make another purchase, they are thanked for shopping with Bamazon. 

Behind the scenes:
-- neccessary npm packages are installed and required, global variables are listed, but not yet defined.
--the connection to the mySQL databse if created, and the connection is made. If made successfully, that is reflected in the console log and the 'start' function is called to run the app.
--In the start function, the query method in node is used to pull all the data from the 'products' table in our Bamazon mySQL databse. The table data include 'product_name, department, price, and stock_quantity' and is assigned a unique id for reference. This includes a function to inform us if there is an error with this code and if so, what it is, and to store the info returned in 'response.'
--This reposonse is handled and fomatted by the use of a for loop to loop through each item and store them in an array called 'choices.' That array is then displayed to the user in the form of a list of items available for purchase. 
--The user us then instructed to select the item (using the item's unique id provided by the mySQL database) and quantity to purchse, handled by 'inquirer.prompt.' This info is saved in a variable called "selectedItem."
--The '.then' will then provide the framework for the answers, first by looping through all the products in the database to determine what they selected and whether the quantity they want to purchase is possible based on the current 'stock_quantity' column in the table.
--Using an 'if/else statement,' if there are not enough in stock, the user is alerted and asked to select another quantity or choose another item, whereby the initial 'start' function is called to begin the purchasing process again. 
--If there are enough in stock, the user is given their total, stored in a variable called 'customerTotal,' (by multiplying the selectedItem.price(grabbed from the table in the database) with the quantity the user wants to purchase (answer.amount)).
--The mySQL database is updated to reflect the new 'stock_quantity' by calling the connection to the database and subtracting the quantity the user purchased from the respective item's intial quantity.  
--The inquirer.prompt is again utilized again asking if the customer wants to make another purchase. Using an if/else statment, if the customer does, the start function is called and the purchasing process begins again, else the customer is thanked for shopping with Bamazon. 

##Manager View (manager.js)

In this view:

--Upon running the file in node, the manager is asked which of the following tasks he or she would like to perform from the list of tasks presented to them, including viewing all products for sale, updating the inventory of current products and adding a new item to the inventory. He selects that task and the corresponding fuction will run. 
--If the 'VIEW_FOR_SALE' function is selected, a list of all the products will be shown. 
--If the 'UPDATE_INV' function is selected they can update the information of an already existing product.
--If the 'ADD_PRODUCT' function is selected they can add a new item to the existing products. 
--All of these actions are refected in the mySQL database.

Behind the scenes:

--Upon running of the application, all server, connection and database information is the same as that associated with bamazonCustomer.js. 
--Upon connection to the server, the 'options' function is called to begin running the application.
--In this function, inquirer.prompt is used to present the user with options of tasks to preform, by typing the number assoicated with that choice.
--'.then' is run to extrapolate the answer using an if/else statement with each listed task as a conditional. The corresponding function for each conditional is called if that task is selected. 
--When the 'viewForSale' function is called, a query is made to the database to select all the products from the 'products' table using the product_name.
--Using a for loop, each item is looped through and console logged out displaying the product_name, department, price and stock_quantity.
--The intial menu of task options reappears to let the user select another task. 
--When the 'updateInv' function is selected, using 'inquirer.prompt' the user is asked which item's quantity they want to update manually.
--a query is then made to the database and used to pull the relative product's information from the databse (based on the user's input (answer.quantity and answer.product)) and then updates the database to reflect the new data. 
--The user is then notified that the inventory was successfully updated and the 'options' function is called again to diplay the choice of tasks to perform.
--When the 'addProduct' function is called, inquirer.prompt is used to present questions to the user to take in data on a new item they want to add to the databse.
--Another query is made to the database to find the appropriate columns in the able and add the corresponding information to the table based on the user's input during the inquirer.prompt. 
--Once the database is update, the user is notified that the product was successfully added and the 'options' function is called again to reveal the list of task options. 

