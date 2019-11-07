let amount = prompt("How many bottles of beer should we start with?");
let fall = 1;
let newAmount = 1

for (fall = 1; fall <= newAmount; fall++) { 

newAmount = amount - fall

console.log(amount + " bottles of beer on the wall\n" + amount + " bottles of beer\nTake " + fall + " down, pass it around\n" + newAmount + " bottles of beer on the wall")

amount = newAmount
}
if (amount == 1) {
	console.log("One bottle of beer on the wall\nOne bottle of beer\nTake that one down, pass it around\nAnyone here have more beer for my wall?")
}
else {
	console.log(amount + " bottles of beer on the wall\n" + amount + " bottles of beer\nTake those " + amount + " down, pass them around\nAnyone here have more beer for my wall?")
}








