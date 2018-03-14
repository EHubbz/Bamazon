//external npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var purchases = [];
var selectedItem;
var customerTotal;
var updatedStockQuantity;


//creates the connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

//connecting to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("server connected");
//run the start function after the connection is made to begin
  start();
});

function start() { //displays table and prompts customer
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;
//	console.log("table selected");
	inquirer.prompt([
		  {
		  	name: "choice",
		  	type: "rawlist",
		  	choices: function() {
		  		var choices = [];
		  		for (var i = 0; i < results.length; i++) {
		  			choices.push(results[i].product_name);
		  		}
		  		return choices;
		  	},
		  	message: "Welcome to Bamazon! What item do you want to purchase? (Type the number to the left of the item to select it.)"
		  },
		  {
 				name: "amount",
		  	type: "input",
		  	message: "How many of this item would you like to purchase?"  
			}
		])
 		.then(function(answer) {
 			var selectedItem;
 			for (var i = 0; i < results.length; i++) {
				if (results[i].product_name === answer.choice) {
            selectedItem = results[i];
        }
 			}
			if (selectedItem.stock_quantity < parseInt(answer.amount)) {
				console.log("We don't have that many in stock. Order cancelled. Select a smaller quantity or another item.");
				start();
			}
			else {

 				connection.query(
     				"UPDATE products SET ? WHERE ?",
      		[
      			{stock_quantity: updatedStockQuantity
				 	},
					 {id: answer.choice
						}
					],
					function(err) {
              if (err) throw err;
              updatedStockQuantity = (answer.stock_quantity - answer.amount);
     	 		customerTotal = selectedItem.price * parseInt(answer.amount);
					console.log("Your Item is in stock! Your total is $" + customerTotal + ".");
					inquirer
    				.prompt({
     						name: "anotherPurchase",
      					type: "rawlist",
      					message: "Would you like to make another purchase?",
      					choices: ["YES", "NO"]
    				})
    					.then(function(answer) {
      					if (answer.anotherPurchase.toUpperCase() === "YES") {
        				start();
      					}
      					else {
      					console.log("Thank you for shopping with Bamazon!")
      					}
      					
    					});
    					}
    					)
						}
           });
				})
						
			
	};


