
console.warn("======= Part 1 =======");

// Task 1
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "red"
};

// Task 2
console.log(car);

// Task 3
// I added "Brand:" to the console.log to make it more readable
// console.log(car.brand); is also correct
console.log("Brand:", car.brand);
console.log("Year:", car.year);

// Task 4
car.color = "blue";

// Task 5
car.isElectric = false;

// Task 6
console.log(car);

// Bonus task 1
const winners = ["Michael", "Brian", "Ana", "Ana", "Niels", "Ana", "Brian", "ChatGPT 4.0", "ChatGPT 4.0"];
function countWinner(name) {
  let count = 0;
  for (let i = 0; i < winners.length; i++) {
    if (winners[i] === name) {
      count++;
    }
  }
  return count;
}
const anaWins = countWinner("Ana");
const brianWins = countWinner("Brian");
const donaldDuckWins = countWinner("Donald Duck");
// `Ana won ${anaWins} times` is a template literal. it is the same as "Ana won " + anaWins + " times"
console.log(`Ana won ${anaWins} times`);
console.log(`Brian won ${brianWins} times`);
console.log(`Donald Duck won ${donaldDuckWins} times`);

// Bonus task 2
function histogram() {
  const histogram = {};
  for (let i = 0; i < winners.length; i++) {
    const winner = winners[i];
    // if (histogram[winner]) is the same as: if (histogram[winner] !== undefined)
    if (histogram[winner]) {
      // if the winner is already in the histogram, increment the value by 1
      histogram[winner]++;
    } else {
      // if the winner is not in the histogram, add it and set the value to 1
      histogram[winner] = 1;
    }
  }
  return histogram;
}
console.log("Histogram:", histogram());
