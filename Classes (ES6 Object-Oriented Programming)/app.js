//Basic Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const p1 = new Person("Chami", 24);
const p2 = new Person("Anna", 30);
p1.greet(); // Hi, my name is Chami

//Test 1 
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSounds(){
    console.log(`The ${this.name} makes sound ${this.sound}`);
  }
}

const a1 = new Animal ("Dog", "Bark");
const a2 = new Animal ("Cat", "Meow");
a1.makeSounds();
a2.makeSounds();


//Class Inheritance
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const s1 = new Student("Ishara", 22, "JS");
s1.study(); 

//Test 2
class Pet extends Animal {
  constructor(name, sound, petName) {
    super(name, sound);
    this.petName = petName;
  }
  Owner() {
    console.log(`${this.petName} is a ${this.name}. It makes sound ${this.sound}.`);
  }
} 

const b1 = new Pet("Dog", "Bark", "Blacky");
const b2 = new Pet("Rabbit", "Mhh", "Pinky");
b1.Owner();
b2.Owner();

//Static Method
class MathHelper {
  static square(x) {
    return x * x;
  }
}

console.log(MathHelper.square(5)); // 25

//Test 3
class divideMaker {
  static divide(y) {
    return y/2;
  }
}

console.log(divideMaker.divide(78));

//PRACTICE TASKS
class Car {
  constructor (brand, model) {
    this.brand = brand;
    this.model = model;
  }

  info(){
    console.log(`Car : ${this.brand}, ${this.model}`)
  }
}

const c1 = new Car ("Ford", "F-150");
const c2 = new Car ("BMW", "3-Series");
c1.info();
c2.info();

class ElectricCar extends Car {
  constructor (brand, model, battery) {
    super(brand,model);
    this.battery = battery;
  }
  batteryInfo(){
    console.log(`Car : ${this.brand}, ${this.model} Battery : ${this.battery}`);
  }
}
const c3 = new ElectricCar("BMW", "3-Series","200kwh");
c3.batteryInfo();



