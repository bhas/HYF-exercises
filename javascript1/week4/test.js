function f(numbers) {
    const oddNumbers = [];
    let sum = 0;
    let count = 0;
    for (let number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
            count = count + 1;
        }
        sum = 0;
    }
    for (let number of oddNumbers) {
        sum += number;
    }

    return sum / count;
}

let numbers = [-3, 1, 8, 5, 7, 14, 98, 15];
console.log(f(numbers)); // Output: 5

numbers = [2, 4, 8, 5, 7];
console.log(f(numbers)); // Output: 6

numbers.pop();
numbers.unshift(1);
numbers.pop();
numbers.push(8);
numbers.unshift(2);
numbers[0] += 3;
numbers[2] *= 3;
console.log(f([2, 4, 6])); // Nan???