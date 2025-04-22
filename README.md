# JavaScript Practice - Basic Exercises

This repository contains my first exercises with JavaScript. They are simple functions aimed at getting familiar with basic programming concepts like arrays, loops, and functions.

## Example: `nextInLine` function

One of the exercises is to create a function `nextInLine` that takes an array and an item, adds the item to the array, and removes the first element.

### Code Example:

```javascript
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}
