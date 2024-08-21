// 1. 
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((num) => {
  return num * 2;
})

console.log(nums2);

// 2.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings

console.log(firstTopping);
console.log(secondTopping);

// 3.
const car = {
  make: 'Audi',
  model: 'q5',
};

const { make, model } = car;

console.log(make);
console.log(model);

// 4.
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

// 5.
// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

const myCar = {...car};

myCar.model = 'q7';

console.log(car);
console.log(myCar);

// 6.
const userProfile = {
  [propertyName]: '25',
}

const propertyName = 'age';

// 7.

// 8.
function sentence(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}`);
  
}

// 9. 
let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'Yum' : 'Yuck')

// 10.
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);
