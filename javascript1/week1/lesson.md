

![pizza banner](./imgs/banner.jpg)


#  `12:15` PART 1 - INTRO
> [!IMPORTANT]
> * What is Javascript (JS)?
> * Why should I learn JS?
> * Adding JS to your HTML webpage
> * `console.log()`



### Tasks (20 min)
1. Create a HTML file `index.htm` with the headline: `Javascript 1 - Week 1`
1. Open the page and the *Developer Tools* and confirm the console output is empty.
1. Create a JS file `part1.js` which logs `Hello World!` and include it in your HTML.
1. Log a message *after*: `I am learning Javascript`
1. Log a message *before*: `===== PART 1 =====`
<details>
<summary>📸 Click to see screenshot</summary>

![result-part1](./imgs/p1-1.jpg)
</details>
   

#### Bonus Tasks
* Make the code work: 
    ```js
    console.log(Am I working?)
    ```
* Log out a *warning* message: `Watch out I am new at JS!`
* Log out an *error* message: `Oh no! Something went wrong D:`
<details>
<summary>📸 Click to see screenshot</summary>

![result-part1](./imgs/p1-2.jpg)
</details>

# `13:00` PART 2 - VARIABLES
> [!IMPORTANT]
> * What are variables?
> * Declaring variables using `const` and `let`
> * Assigning values: `text`, `numbers`, and `yes/no`
> * `null` and `undefined`

### Tasks (30 min)
Let's pretend we were tasked to develop a site for a local pizzaria. We will start by first storing their information in some variables.
1. Add a new file `part2.js` which logs: `===== PART 2 =====` and include it in your HTML below the other
1. Improve the existing code:
```js
// Info about us
const Owner = 'Carlo';
const r = 'Bella Napoli';
const DESCRIPTION = 'Experience the true Italian cuisine!';
const Nom Nom Street = 'Nom Nom Street 3, 2300 Copenhagen';
const opnTm = '10:00';
const clsTm = '23:00';
Console.log('Welcome to' r);
Console.log(description);
console.log('Opening hours:', '10', -, '23');
```
1. They send us this additional information about them below. Lets try to extract the key informations into some variables too:
   > At Bella Napoli you can eat great italian food. We have vegan options and don't allow neither dogs nor smoking. Contact us on +45 12 34 56 78 or bella-napoli@hyf.com
1. Now we need a menu. Store some variables to capture the below options and their prices:
   * `Margherita Pizza` 90 DKK
   * `Pesto Pizza` 120 DKK
   * `Pepperoni Pizza` 120 DKK
   * `BBQ Chicken Pizza` 130 DKK
   * `White Pizza` 110 DKK
1. Print out the menu so it looks like below
<details>
<summary>📸 Click to see screenshot</summary>

![result-part1](./imgs/p2-1.jpg)
</details>






1. *Declare* a variable for your date of death. Do not assign any value.
1. You won a new car 🤩. Change the value of the relevant variables.
1. You just got a new pet ❤️. Change the value of the relevant variables.
1. Your car got stolen 😟. Change the value of the relevant variables. 



bonus 
research (single `)


change values
change values



#### Bonus Tasks
* The owner told us that they will add a new pizza: `Meat Lover's Pizza`. However, it seems like our code doesn't work. How can we use `'` in a text? 🤔❓
    ```js
    const pizza6 = 'Meat Lover's Pizza';
    const pizza6Price = 135;
    // TODO log pizza
    ```
* The restaurant want to change their openings hours over the winter to `12:00 - 21:00`. Update the variables and log it as a *warning*: `OBS! Our new opening hours are: 12:00 - 21:00`


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