

<!-- Simple loops, objects etc -->





## Refactor
```js
function f(x) {
    if (x) {
        return "User is " + x + " years old";
    } else {
        return "No age provided";
    }
}

console.log(f(25)); // "User is 25 years old"
console.log(f("30")); // "User is 30 years old"
console.log(f("thirty")); // "User is thirty years old"
console.log(f(null)); // ???
```


## Troubleshoot

1. Guess the output
```js
const a = 10;
const b = -10;
const c = "100"
const d = "no";
const e = {
    name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
console.log("#1", a + a);
console.log("#2", a + b);
console.log("#3", a + c);
console.log("#4", a + d);
console.log("#5", a + e);
console.log("#6", a + e["name"]);
console.log("#7", a + e["age"]);
console.log("#8", a + f);
console.log("#9", a + f[1]);
console.log("#10", a + h);
```



## 1 🎓 Troubleshoot issue with grades
Below is a piece of code that is supposed to process a list of students and their grades, and return the average grade for the class. The calculation should ignore any invalid grades (negative numbers or non-numeric grades). However, the code has some bugs. Your task is to identify and fix the issues.
```js
function calculateAverageGrade(students) {
    let total = 0;
    let count = 0;
    
    for (let i = 0; i < students.length; i++) {
        let grade = students[i].grade;
        
        if (grade > 0) {
            total += grade;
            count++;
        } else {
            console.log("Invalid grade for student: " + students[i].name);
        }
    }
    
    return total / count;
}

let studentsList = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: -10 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 100 },
    { name: "Eva", grade: "A" }
];

console.log("Average grade:", calculateAverageGrade(studentsList)); 
// Expected Output: Average grade: 91.66
```

**Tasks**
1. Identify the bug(s) in the code.
2. Fix the code so that it correctly calculates the average grade for the students.

## 1 🎓 Troubleshoot
clean up const / let and variable names


## 1 🎓 Built a Recipe Management System
You are tasked with creating a recipe management system. This system will keep track of recipes, each containing:
* The name of the recipe.
* The time it takes to cook the recipe, in minutes.
* A list of ingredients required for the recipe.

```
Spaghetti
30 min
spaghetti, tomato sauce, garlic

Salad
10 min
lettuce, tomato, cucumber, olive oil

Pancakes
20 min
flour, milk, eggs, sugar
```

**Tasks**
1. Create a list with the below recipes. Each recipes which each have a name, time, and ingredients.
2. Write a method to find the fastest recipe based on the cooking time.
3. Write another method to find all recipes that contain specific ingredients. The function should take an array of ingredients as an argument and return all recipes that contain any of those ingredients.



## 1 🎓 Built
1. Write a function called sumEvenNumbers that takes an array of numbers and returns the sum of only the even numbers in the array.
```js
sumEvenNumbers([1, 2, 3, 4, 5, 6]); 
// Expected output: 12 (because 2 + 4 + 6 = 12)

sumEvenNumbers([10, 15, 20, 25]); 
// Expected output: 30 (because 10 + 20 = 30)
```

## 1 🎓 Built
1. Write a function that takes an array of numbers and returns the second largest number. If there aren't enough unique numbers, return null.
```js
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
console.log(secondLargest([3, 3, 3])); // null
console.log(secondLargest([5])); // null
console.log(secondLargest([])); // null
```


## 1 🎓 Refactor
1. Describe in your own words to a team mate or mentor what this code does
2. The code is hard to read due to poor naming. Can you improve it? (there might be more than just the names to improve) 
```js
function filterItems(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].price < 20 && list[i].inStock) {
            let item = list[i].item;
            result.push(item);
        }
    }
    return result;
}

let shpitms = [
    { item: "Apple", price: 1.5, inStock: true },
    { item: "Laptop", price: 999.99, inStock: true },
    { item: "T-shirt", price: 15, inStock: false },
    { item: "Bananas", price: 2, inStock: true },
    { item: "Headphones", price: 25, inStock: true }
];

console.log(filterItems(shpitms)); 
// Expected Output: ["Apple", "Bananas"]

```




## 1 🎓 Refactor
1. Describe in your own words to a team mate or mentor what this code does
2. The code is hard to read due to poor naming. Can you improve it? (there might be more than just the names to improve) 
```js
function f(m) {
    let a = [];
    for (let i = 0; i < m.length; i++) {
        if (m[i].rating >= 8) {
        a.push(m[i].title);
    }} return a; }

let d = [
    { title: "Interstellar", rating: 8.6 },
    { title: "The Room", rating: 3.7 },
    { title: "The Godfather", rating: 9.2 },
    { title: "Cars", rating: 7.1 }
];

console.log(f(d)); 
// Expected Output: ["Interstellar", "The Godfather"]

```
