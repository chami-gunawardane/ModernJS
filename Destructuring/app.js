//Old way
const user = { name: "Chami", age: 24 };

const name = user.name;
const age = user.age;

console.log(name);
console.log(age);

//New way
const user01 = { name01: "Chami", age01: 24 };

const { name01, age01 } = user01;

console.log(name01); 
console.log(age01);  

//Test 01
const Game = {Hero1: "Police", Hero2: "Thief"};

const {Hero1, Hero2} = Game;

console.log(Hero1);
console.log(Hero2);

//Rename variables while destructuring
const person = { fname: "Ishara", city: "Colombo" };
const { fname: firstName, city: location01 } = person;

console.log(firstName); 
console.log(location01);  

//Test 02
const marks = {s1:80, s2:70};
const {s1:subject01, s2:subject02 } = marks;

console.log(subject01);
console.log(subject02);

//Array Destucturing
const colors = ["red", "green", "blue"];
const [first01, second01, third01] = colors;

console.log(first01);

//Test 03
const food = ["Ramen", "Sushi", "BubbuleTea"];
const [Meal1, Meal2, Meal3]= food;

console.log(Meal1);
console.log(Meal2);
console.log(Meal3);

//Skip items
const values = [10, 20, 30];
const [, secondValue] = values;

console.log(secondValue); 

//Test 04
const Vehicles = ["BMW", "Benz", "Ferrari", "Porsche"];
const [,,thirdValue,fourthValue] = Vehicles;
console.log(thirdValue);
console.log(fourthValue);

//PRACTICE TASKS
const product = {
  title: "Aloe Vera Gel",
  price: 1200,
  brand: "Roushan"
};

const {title, price, brand} = product;
console.log(title);
console.log(price);

const sizes = ["Small", "Medium", "Large", "XL"];
const [first, second, third, fourth] = sizes;
console.log(first);
console.log(third);



