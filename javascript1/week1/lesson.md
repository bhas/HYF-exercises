




#  `12:15` PART 1 - INTRO
> [!IMPORTANT]
> * What is Javascript (JS)?
> * Why should I learn JS?
> * Adding JS to your HTML webpage
> * `console.log()`



### Tasks (15 min)
1. Create a HTML file `index.htm` with the headline: `Javascript 1 - Week 1`
1. Open the page and the *Developer Tools* and confirm the console output is empty.
1. Create a JS file `tasks.js` which logs `Hello World` and include it in your HTML.
1. Log a message *after*: `Hello to you too`
1. Log a message *before*: `===== PART 1 =====`

#### Bonus Tasks
* Insert the code `console.log(Am I working)`. Make the code work.
* Log out a *warning* message: `Watch out I am new at JS!`
* Log out an *error* message: `Oh no! Something went wrong D:`


# `13:00` PART 2 - VARIABLES
> [!IMPORTANT]
> * What are variables?
> * Declaring variables using `const` and `let`
> * Assigning values: `text`, `numbers`, and `yes/no`
> * `null` and `undefined` 

### Tasks (30 min)
1. Log a message: `===== PART 2 =====`
1. Create variables about youself:
   * First name
   * Last name
   * height in cm
   * Number of kids
   * Name of youngest kid
   * Whether you own a car
   * Car model
   * Whether you own a pet
   * Pet name
   * type of pet
   * Age of pet
1. Log: `Hello, my name is <first name> and I am learning JS`
1. Log all the above info with fitting labels such as `First name: Bjorn`.
1. *Declare* a variable for your date of death. Do not assign any value.
1. You won a new car 🤩. Change the value of the relevant variables.
1. You just got a new pet ❤️. Change the value of the relevant variables.
1. Your car got stolen 😟. Change the value of the relevant variables. 


#### Bonus Tasks
* Fix this code
    ```js
    let fn = 'Britta';
    const ln = 'Thomson';
    let ysinDk = '8';
    const money = 2000;
    Console.log(Britta, Thomson, "is her name");
    ```
* Fix this code
    ```js
    const money = 2000;
    Console.log("I won the lottery);
    money: '200,000'
    ```
* Fix this code
    ```js
    neighbor = 'Martin';
    Console.log(Martin, is the neighbor);
    ```
* Add comments to you code explaining what happened in task 6-8 which caused us to change the values


# `13:45` PAUSE (30 min)

# `14:15` PART 3 - TYPES
> [!IMPORTANT]
> * What are types and why should I care?
> * Simple types
> * Arrays
> * `typeof`



### Tasks (30 min)
1. Log: `===== PART 3 =====`
1. With a classmate, guess what is logged. Afterwards, check if you guessed correctly.
    ```js
    console.log(typeof 3);
    console.log(typeof -33);
    console.log(typeof '3');
    const threeConst = 3;
    console.log(threeConst);
    let threeLet = 3;
    console.log(threeLet);
    console.log(typeof 'console.log("console.log(console.log(""))")');
    const names = ['benjamin', 'Christopher'];
    console.log(typeof names[0]);
    console.log(typeof names);
    console.log(typeof true);
    ```
1. Fix the errors:
    ```js
    const name = 'benjamin';
    name = 'benjamin-better';

    const pizzaPrice = 78;
    const pizzaPriceDiscounted = pizzaprice - 10;

    const users = ['peter', 'Johnny', 'Børge'];
    const lastUser = users[3];
    ```

#### Bonus Tasks
* Insert the code `console.log(Am I working)`. Make the code work.
* Log out a *warning* message: `Watch out I am new at JS!`
* Log out an *error* message: `Oh no! Something went wrong D:`



# `15:00` PART 4 - OPERATORS
> [!IMPORTANT]
> * Comparison
>    * Equals / not equal
>    * Less than / greater than
> * Arithmetic
>    * Addition `+`
>    * subtraction `-`
>    * multiplication `*`
>    * division `/`
>    * Remainder `%`



### Tasks (30 min)
1. Log: `===== PART 4 =====`
1. With a classmate, guess what is logged. Afterwards, check if you guessed correctly.
    ```js
    const employee = 'Carl';
    const salary = 200;
    const expenses = 20;
    console.log(30 + 30 / 3);
    console.log((10 + 10) * 2);
    console.log(10 % 4);
    console.log(salary === "200");
    console.log(salary === 200);
    console.log(salary == "200");
    console.log(salary == 200);
    console.log(salary - expenses);
    console.log(salary < expenses);
    console.log(salary >= salary);
    ```
1. Create an array with 3 strings, three numbers and three booleans
1. Calculate how many seconds there are in a year
1. Calculate how many days you have been alive if you are 36 years and 92 days old
1. Store an amount of USD. Calculate how much it is in DKK. Also calculate what it is in GBP.
1. Store an array of 3 amounts of money. Calculate the average amount of them.

#### Bonus Tasks
* Guess what is logged. Afterwards, check if you guessed correctly.
    ```js
    const text = 'Carl';
    const number = 200;
    console.log(text + text);
    console.log(number * text);
    console.log(text * 2);
    console.log(text === "Carl");
    console.log(text + number);
    console.log(typeof (text + number));
    ```
* Calculate the amount of money you would have after 3 years if you start with 5000 DKK and get a 5% interest per year.
* Calculate if a given number is odd or even



# `15:45` QUESTIONS