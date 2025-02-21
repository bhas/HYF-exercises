// const chalk = require('chalk');

// console.log(chalk.red('A') + chalk.green('B') + chalk.yellow('C'));

// function green(text) {
//     return "\x1b[32m" + text + "\x1b[0m";
// }

// function yellow(text) {
//     return "\x1b[33m" + text + "\x1b[0m";
// }

// console.log(yellow('A'), green('P'), 'P', green('L'), yellow('E'));

process.stdout.write("What is your name? "); // Ask the question

process.stdin.once("data", (data) => {
    const name = data.toString().trim(); // Convert input to string and trim spaces
    console.log(`Hello, ${name}!`);
    process.stdin.end(); // Close the input stream
});

process.stdout.write("What is your name now? "); // Ask the question