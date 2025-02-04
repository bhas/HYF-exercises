
// task 1
console.log('===== PART 4 =====');

// task 2
const order2 = [1, 2, 2];
let totalPrice2 = prices[order2[0]] + prices[order2[1]] + prices[order2[2]];
console.log('Order:', order2);
console.log('Total price:', totalPrice2.toFixed(2), 'DKK');

// task 3
const firstPizzaDiscount = prices[order[0]] * 0.2;
let discountedPrice2 = totalPrice2 - firstPizzaDiscount;
console.log('Discount of first pizza:', firstPizzaDiscount.toFixed(2), 'DKK');



// task 4
const addPlasticBag = true;
if (addPlasticBag) {
  const plasticBagPrice = 5;
  discountedPrice2 += plasticBagPrice;
  console.log('Added plastic bag:', plasticBagPrice.toFixed(2), 'DKK');
}

// Bonus task 1
let deliveryFee = 0;
if (totalPrice2 <= 300) {
  deliveryFee = 50;
  console.log('Delivery fee:', deliveryFee.toFixed(2), 'DKK');
}
discountedPrice2 += deliveryFee;

// task 5
let vat2 = discountedPrice2 * 0.25;
console.log('VAT (25%):', vat2.toFixed(2), 'DKK');

let finalPrice2 = discountedPrice2 + vat2;
console.log('Final price:', finalPrice2.toFixed(2), 'DKK');

