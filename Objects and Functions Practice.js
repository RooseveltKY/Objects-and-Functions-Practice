var spicyAhi= {
  fishType: "Ahi",
  sauce: "Sriracha and Mayo",
  price: 1000000,
  rice: "White",
  ounces: 8
};

//Ask the user for amount of spicy ahi to buy
var amount= prompt("Amount to buy");
//Diplay the total amount of ounces the user will buy
var totalOunces= amount*spicyAhi.ounces
window.alert("Buying "+ totalOunces);
//Then display the total dollar amount
var totalDollar= amount*spicyAhi.price;
window.alert("Your total price: "+ totalDollar);
