

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
