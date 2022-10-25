let name = prompt("Please write down your name");
let exer = prompt("Hello, dear "+name+"!\nPlease, write down\n2 - If you want to find a perimeter of a rectangle;\n3 - If you want to find out the area of a circle;\n9 - If you want to check whether your number is negative or positive;\nAll full answers for the exercises represented in Object format can be found in Console in Web Developer Tool");

if (exer==2) {
	/*Exercise 2*/
	let a = prompt("Write down the length of rectangle");
	let b = prompt("Write down the width of rectangle");
	let p=2*(Number(a)+Number(b))
	const results = {
		Length: Number(a),
		Width: Number(b),
		Perimeter: p
	}
	console.log(results);
	prompt("The perimeter of a rectangle is "+p)
}


else if (exer==3){
	/*Exercise 3*/
	let r = prompt("To find out the area of a circle write down its radius please")
	let a=Math.PI*Math.pow(r, 2);
	const results = {
		radius: Number(r),
		Area: a
	}
	console.log(results);
	prompt("The area of circle with radius "+r+" is "+a);
}


else if (exer==9) {
	/*Exercise 9*/
	let c = prompt("To check if number is negative or positive write it down below please");
	if (c==0) {
		console.log("Your number is neither positive nor negative")
		prompt("Your number is neither positive nor negative")
	} 
	else if (c>0) {
		console.log("Your number is positive")
		prompt("Your number is positive")
	}
	else {
		console.log("Your number is negative")
		prompt("Your number is negative")
	}
}
