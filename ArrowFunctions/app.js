let a = 90;
let b = 10;

//old way
function add(a, b) {
  return a + b;
}

console.log(a + b);


let c= 40;
let d= 50;
//ES6 arrow function
const addnew = (c, d) => {
  return c + d;
};

console.log(c + d);

//shorter version
const addnew01 = (c,d) => c+d;

//arrow function with one parameters
let name = "Chami"
const hello = name => `Hello ${name}`
console.log(hello(name));

//arrow function with no parameters
const sayHi = () => "Hi"
console.log(sayHi());


//PRACTICE TASKS
let number= 20;
const double = (number) => number*2;
console.log(double(number));

let name01="Edward";
const welcome = (name01) => `Welcome ${name01}`;
console.log(welcome(name01));

let num = 5;
const square = (num) => num*num;
console.log(square(num));
