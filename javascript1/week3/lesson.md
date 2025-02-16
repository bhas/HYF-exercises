
<!-- ------------------------------ PART 1 ----------------------------------- -->

#  `12:15` PART 1 - OBJECTS
> [!IMPORTANT]
> * What are objects?
> * Creating objects
> * Assigning properties using **Computed Properties** or **Regular Properties**
> * Accessing properties for **Computed Properties** or **Regular Properties**
> * Adding and removing properties
> * Mixing arrays and objects


 ### Tasks (20 min)
1. Create an object called car with the following properties:
   * brand (e.g., "Toyota")
   * model (e.g., "Corolla")
   * year (e.g., 2020)
   * color (e.g., "red")
2. Print the car object to the console.
3. Access and print the brand and year properties separately.
4. Modify the color property to a new color.
5. Add a new property called isElectric (set it to false).
6. Print the updated object.


#### Bonus Tasks
1. make function which can count how many time a given name has won
    ```js
    const winners = ['Michael', 'Brian', 'Ana', 'Ana', 'Niels', 'Ana', 'Brian', 'ChatGPT 4.0', 'ChatGPT 4.0',]
    ```
2. make a function named `histogram()` which returns an objects containing the number of times each person has won. i.e. the output should be something like this:
    ``` js
    {
      'Michael': 1,
      'Brian': 2,
      'Ana': 3,
      'Niels': 1,
      'ChatGPT 4.0': 2
    }
    ```
3. https://www.codewars.com/kata/colour-association/train/javascript
4. https://www.codewars.com/kata/whos-online/train/javascript
5. https://www.codewars.com/kata/add-property-to-every-object-in-array/train/javascript






<!-- ------------------------------ PART 2 ----------------------------------- -->

# `13:00` PART 2 - ARRAYS 
> [!IMPORTANT]
> * Using `.pop()`, `.push()`, `.shift()`, and `.unshift()` to modify arrays
> * Getting the size of an array using `.length`
> * Finding items in arrays using `.indexOf()`
> * Loop items using `for...of` loop

### Tasks (20 min)
1. Define an array of 5 items that are all numbers
2. Add one number at the end of the array
3. Add another number at the beginning of the array
4. Print out how many items you have in your array
5. Remove the items you just added at the beginning and at the end
6. Again print out how many items you have in your array
7. Use the for loop to print out the items in your array
8. Use the for..of loop to print out the items in your array
9. Use the .toString() method to print out the items of your array
10. Check if an item exists in your array with .includes()













#### Bonus Tasks
1. What is this code going to show?
    ```js
    let fruits = ["Apples", "Pear", "Orange"];

    // push a new value into the "copy"
    let shoppingCart = fruits;
    shoppingCart.push("Banana");

    // what's in fruits?
    alert( fruits.length ); // ?
    ```
2. https://www.codewars.com/kata/squash-the-bugs/train/javascript
3. https://www.codewars.com/kata/is-this-my-tail/train/javascript
4. https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript

<!-- ------------------------------ PAUSE ----------------------------------- -->
# `13:45` PAUSE (30 min)







<!-- ------------------------------ PART 3 ----------------------------------- -->

# `14:15` PART 3 - CALL STACK
> [!IMPORTANT]
> * What is a call stack?
> * Logging the call stack using `console.trace()`
> * Reading call stacks from errors

### Tasks (20 min)

#### Bonus Tasks
1. TODO
https://github.com/HackYourFuture-CPH/JavaScript/blob/main/javascript1/week3/lesson-plan.md#call-stack-1







<!-- ------------------------------ PART 4 ----------------------------------- -->

# `15:00` PART 4 - METHODS
> [!IMPORTANT]
> * Understand Functions vs Methods
> * Object Oriented Programming 
> * Defining methods
> * Accessing properties using `this.`

### Tasks (30 min)
1. Make an object named `classRoom` which has a name, and a number of students of some fictional students. Imagine each student is an object containing a full name, age, and two other properties of your choice
2. Create a **method** in the classRoom object which can find if a student exists based on the full name
3. Create a method which can add a student to the classRoom. If the student is already in the class it should not be added again. 
4. Create a method which can expel a student from the classRoom.
6. Create a method which can tell how many minors are in the class (younger than 18 years)
8. Add two students with the same name `Michael Smith`. We can no longer rely on the name to distinquish the students. Add a function which adds a unique id to all students in the array.


#### Bonus Tasks
1. Finish all class exercises for today
1. Ask ChatGPT or search the internet to further understand what Object Oriented Programming is and why it is useful.

# `15:45` QUESTIONS