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
p1.greet(); // Hi, my name is Chami
