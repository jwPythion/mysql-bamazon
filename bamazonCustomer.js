var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
const cTable = require('console.table');

var PORT = 3306;


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Working!");
    showStock();
});

function showStock() {
    connection.query("SELECT * FROM auction", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log(console.table);
        runSearch();
    });
}

function runSearch() {
    inquirer
        .prompt({
            name: "itemID",
            type: "list",
            message: "What is the item ID of the product you'd like to purchase?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
            {
                name: "NumberOfItems",
                type: "input",
                message: "How many would you like to purchase?",
                default: "10"
            })
        .then(function (userInput) {
            var NumItems = userInput.NumberofItems
            var ItemtoBuy = userInput.itemID

            purchaseItems(ItemtoBuy, NumItems);
        });
};

function purchaseItems(itemId, NumItems) {

    connection.query("SELECT * From Auction WHERE item_id =  " + itemID, function (err, res) {
        if (err) throw err
    });

    if (NumID <= res[0].stock_quantitiy) {

        var totalAmount = res[0].price * NumItems;

        console.log("Your Order is On its way!");
        console.log("Total cost for " + NumItems + "  " + res[0].product_name + " is " + totalAmount + ". Thanks for buying with Bamazon!");

    } else {
        console.log("Apologies. Our stock for " + res[0].product_name + " is insufficient for your order.");
    };
    runSearch();

};

runSearch();




// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });