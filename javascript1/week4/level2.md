
# Level 1 - Hard Difficulty
> [!IMPORTANT]
> These exercises will challenge all your skills so far. There will be less guidance compared to Level 1, and you may need to learn new topics independently. Choose an exercise that interests you. Once completed, if you seek an even greater challenge, proceed to the [Level 3 exercises](./level3.md). Otherwise, try another exercise here.

<!-- More advanced tasks -->










## 🎓🧱 Next Birthday Countdown
1. Learn how we can work with dates in Javascript and explain it to a classmate and a mentor.
   * How can I get today's date?
   * How can I get Jan 16th 1992?
   * What kind of operations can I do with dates?
2. Write a function `daysUntilBirthday` that takes a birthdate (YYYY-MM-DD) as input and returns the number of days until the next birthday.
    ```js
    console.log(daysUntilBirthday("1995-06-15")); // Outputs the number of days until June 15 next occurrence
    ```









## 🎓✨ Review NASA's Code
NASA has called you to review their code from the latest space mission. The current code works, but it’s inefficient. Identify repeated logic, unnecessary code, and ways to improve clarity.
1. The team member suggested that the code could be simplified using ternary operators, but what is that? 
   * Research what a ternary operator is and explain it to a team mate and a mentor
2. Note down the results of the existing code
3. Improve the code where possible:
   * Is any code redundant and can be removed?
   * Is any code repeated and can be reused in a function or loop instead?
   * Are the variable names good?
   * Can we use ternary operators anywhere?
   * Anything else?
4. Verify that the code still works and gives the same results as in step 2.
```js
function getTicketPrice(age, isVIP) {
    let price;
    if (isVIP) {
        price = 0;
    } else {
        if (age < 12) {
            price = 50;
        } else {
            if (age >= 12 && age < 18) {
                price = 75;
            } else {
                price = 100;
            }
        }
    }
    return price;
}

function canTravel(height, age) {
    if (height >= 140) {
        if (age >= 10) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function printPassengerInfo(name, age, height, isVIP) {
    let ticketPrice = getTicketPrice(age, isVIP);
    let travelStatus = canTravel(height, age) ? "Approved for launch" : "Not eligible for space travel";
    console.log(name + " | Age: " + age + " | Height: " + height + "cm | Ticket Price: $" + ticketPrice + " | Travel Status: " + travelStatus);
}

printPassengerInfo("John", 25, 180, false);
printPassengerInfo("Jane", 10, 130, false);
printPassengerInfo("Bob", 16, 155, true);
printPassengerInfo("Alice", 8, 120, false);
printPassengerInfo("David", 12, 140, false);
printPassengerInfo("Eve", 18, 160, false);
printPassengerInfo("Frank", 11, 145, false);
printPassengerInfo("Grace", 14, 135, false);
printPassengerInfo("Henry", 9, 125, false);
printPassengerInfo("Isabel", 13, 150, false);
printPassengerInfo("Kevin", 17, 170, false);
printPassengerInfo("Lucy", 7, 110, false);
printPassengerInfo("Michael", 15, 165, false);
printPassengerInfo("Nancy", 19, 175, false);
printPassengerInfo("Oliver", 6, 105, false);
printPassengerInfo("Patricia", 20, 185, false);
printPassengerInfo("Quinn", 5, 100, false);
printPassengerInfo("Robert", 21, 190, false);
```

