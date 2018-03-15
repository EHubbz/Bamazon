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
  options();
});

function options() {
	inquirer.prompt({
		  	name: "option",
		  	type: "rawlist",
		  	choices: ["VIEW_FOR_SALE", "VIEW_LOW_INV", "UPDATE_INV", "ADD_PRODUCT"],
		  	message: "What would you like to do?"
		  })
			.then(function(answer) {
      if (answer.option.toUpperCase() === "VIEW_FOR_SALE") {
        viewForSale();
      }
      else if (answer.option.toUpperCase() === "VIEW_LOW_INV") { 
        viewLowInv();
      }
      else if (answer.option.toUpperCase() === "UPDATE_INV") {
        updateInv();
      }
      else if (answer.option.toUpperCase() === "ADD_PRODUCT") {
        addProduct();
      }
    });
}

function viewForSale() {
	 connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    //var productsArray = [];
   
    // 	productsArray.push(results[i].id + results[i].product_name + results[i].department_name + results[i].price + results[i].stock_quantity);
     //}
      //return productsArray;
      //console.log("Here are the products currently for sale.");
      for (var i = 0; i < results.length; i++) {
        console.log("Product: " + results[i].product_name + " " + "Department: " + results[i].department_name + " " + "$" + results[i].price + " " + "In stock: " + results[i].stock_quantity);
      }
      setTimeout(function(){
        options();
      }, 1500)
    })
      
};
      


//function viewLowInv() {

//};

function updateInv() {
	inquirer
	.prompt([
			{
        name: "product",
        type: "input",
        message: "What item's quantity would you like to update?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to add?"
      },
		])
		.then(function(answer) {
		connection.query(
    	"UPDATE products SET ? WHERE ?",
    	[
     	 {
      	  stock_quantity: answer.quantity
      	},
      	{
      	  product_name: answer.product
      	}
    	],
    	function(err) {
    		if (err) throw err;
     	 console.log("Inventory was successfully updated!");
     	 options();
   	 }
  	);
	});
}

function addProduct() {
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the name of the item you want to add?"
      },
      {
        name: "department",
        type: "input",
        choices: ["BEDDING", "HOME_ACCENTS", "HEALTH_WELLNESS", "KITCHEN", "BATH", "FURNITURE", "LINGERIE"],
        message: "What department does this item go in?"
      },
      {
        name: "price",
        type: "input",
        message: "What is the price of this item?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many do you want to add?"
      }
    ])
	.then(function(answer) {
	connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.item,
          department_name: answer.department,
          price: answer.price,
          stock_quantity: answer.quantity
        },
        function(err) {
          if (err) throw err;
          console.log("This product was successfully added to the inventory!");
       		options();
        }
      );
	});
};   


