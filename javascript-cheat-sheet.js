// variables

var yourName = "Maddy";
console.log(yourName);

// debugging

var number = 3;

if (number > 10) {
	console.log("Great, your number is greater than 10!")
}
else {
	alert("Your number is less than 10. Please try again.")
};

// different data types

//string

var abc = "I'm writing a string!";

//number

var numero = 5000;

//boolean

var math = (5 + 6);

math > 10;

var math2= (2 + 2);

math2 > 10;


//arrays

var greenSmoothie = ["kale","apple","banana","ginger"];

var baseSmoothie = ["almond milk","blueberries","raspberries"];

var smoothie = [greenSmoothie, baseSmoothie];

smoothie[1][0]
//should return almond milk

//testing

10-1 ==9
//true

"15" ===15
//false

4 != 5
//true

5 > 4
//true

4 < 2
//false

4 <= 4
//true

5 >=10
//false

// Logic

var color = "green";
console.log(color.length);

if (color.length > 6) {
	console.log("great, there's more than 6 letters!")
}
else if (color.length === 5) {
	console.log("cool, same # of characters")
}
else {
	console.log("get some more letters in!")
}

// Functions

function subtractOne (number) {
	return number - 1;
}

subtractOne(2)

// For loop

evenNumbers = [10, 12, 14, 16, 18];

for(var i = 0; i < evenNumbers.length; i++) {
	if (evenNumbers[i] > 12) {
		console.log(evenNumbers[i])
	}
}

for(var i=0; i<10; i++) {
	console.log(i)
}

//lesson 5 exercise written through a for loop

for(var i=99; i > -1; i-=1) {
	if (i === 0) {
		console.log("No more bottles of beer on the wall.")
	}
	else {
		console.log(i + " Bottles of Beer on the Wall ")
	}
}


//lesson 5 exercise written through while

var x = 100;
while(0 < x) {
	if (x === 0) {
		console.log("No more bottles of beer.")
	}
	else {
		console.log(x + " Bottles of Beer on the Wall")
	}
	x-=1;
}
