
console.warn("======= Part 2 =======");

// Task 1
const numbers = [1, 200, -10, 17, 30.5];

// Task 2
numbers.push(5000);

// Task 3
numbers.unshift(-3000);

// Task 4
console.log(numbers.length);

// Task 5
numbers.pop();
numbers.shift();

// Task 6
console.log(numbers.length);

// Task 7
console.log("Logging using for loop");
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// Task 8
console.log("Logging using for..of loop");
// Notice the similarity to the above for loop
for (const number of numbers) {
  console.log(number);
}

// Task 9
console.log("Logging using toString()");
console.log(numbers.toString());

// Task 10
const exists = numbers.includes(17);
console.log("17 exists:", exists);


// Bonus task 1
// in this example we should have used const instead of let
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert(fruits.length); // it shows 4, because shoppingCart is a reference to the same array