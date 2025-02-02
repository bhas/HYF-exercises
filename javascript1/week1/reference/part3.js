
// task 1
console.log('===== PART 3 =====');


// task 2
owner = 'Carlo';
restaurant = owner + '\'s Pizza';
console.log(restaurant);
owner = 'Maria';
console.log(restaurant);


// task 3
const pizzas = ['Margherita Pizza', 'Pesto Pizza', 'Pepperoni Pizza', 'BBQ Chicken Pizza', 'White Pizza'];
const prices = [90, 120, 120, 130, 110];

// task 4
console.log('Our menu:');
console.log('#1', pizzas[0], '-', prices[0], 'DKK');
console.log('#2', pizzas[1], '-', prices[1], 'DKK');
console.log('#3', pizzas[2], '-', prices[2], 'DKK');
console.log('#4', pizzas[3], '-', prices[3], 'DKK');
console.log('#5', pizzas[4], '-', prices[4], 'DKK');


// task 5
const order = [0, 1, 1, 2, 4];

// task 6
const totalPrice = prices[order[0]] + prices[order[1]] + prices[order[2]] + prices[order[3]] + prices[order[4]];
console.log('Order:', order);
console.log('Total price:', totalPrice.toFixed(2), 'DKK');


// ===== BONUS TASKS =====

// task 1
const discountedPrice = prices[order[0]] * 0.8 + prices[order[1]] * 0.8 + prices[order[2]] + prices[order[3]] + prices[order[4]];
console.log('Discounted price:', discountedPrice.toFixed(2), 'DKK');

// task 2
const vegetarian = [true, true, false, false, true];
console.log('Our menu:');
if (vegetarian[0]) {
  pizzas[0] = pizzas[0] + ' (v)';
}
if (vegetarian[1]) {
  pizzas[1] = pizzas[1] + ' (v)';
}
if (vegetarian[2]) {
  pizzas[2] = pizzas[2] + ' (v)';
}
if (vegetarian[3]) {
  pizzas[3] = pizzas[3] + ' (v)';
}
if (vegetarian[4]) {
  pizzas[4] = pizzas[4] + ' (v)';
}
console.log('#1', pizzas[0], '-', prices[0], 'DKK');
console.log('#2', pizzas[1], '-', prices[1], 'DKK');
console.log('#3', pizzas[2], '-', prices[2], 'DKK');
console.log('#4', pizzas[3], '-', prices[3], 'DKK');
console.log('#5', pizzas[4], '-', prices[4], 'DKK');

