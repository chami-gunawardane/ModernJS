// The ... operator is two things:
// Spread → expands an array or object
// Rest → collects multiple items into one variable

//Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); 

//Test 01
const arr01 = [0,9,8];
const arr02 = [...arr01,7,6,5];
console.log(arr02);

//Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);

//Test 02
const obj01 = {p: 0, q:9, r:8};
const obj02 = {...obj01, s:7};
console.log(obj02);

//Reset in functions
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); 

//REDUCE => takes all elements of an array and reduces them to a single value.

//Test 03
function subtraction(...num01) {
  let final = 100;
  for (let n of num01){
    final -= n;
  }
  return final;
}
console.log(subtraction(10,20,8,2));
//Shorter version (Test 03)
function subtraction01(...num02) {
  return num02.reduce((final, n) => final - n, 100);
}
console.log(subtraction01(2,3,5,10));

//Rest with destructuring 
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first);  
console.log(rest);   

//Test 04
const arr03 = [10, 9, 8, 7, 6];
const [tenth, nineth, eighth, ...rest01] = arr03;
console.log(tenth);
console.log(rest01);

//PRACTISE TASKS
const arraySpread0 = [10, 20];
const arraySpread = [...arraySpread0, 30, 40];
console.log(arraySpread);

const objectSpread0 = {brand: "Roushan"};
const objectSpread = {...objectSpread0, title: "Gel", price: 1200};
console.log(objectSpread);

function multiplyAll(...numbers) {
  return numbers.reduce((sum, x) => sum * x, 1 );
}
console.log(multiplyAll(2, 3, 4));

