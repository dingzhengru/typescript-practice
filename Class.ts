/*
  Class 概念就跟其他語言的一樣
*/
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  shout() {
    console.log("Shout!")
  }
}

class Dog extends Animal {

  shout() {
    console.log('dog shout!');
  }
}

let animal = new Animal("a", 1);
let dog = new Dog("dog01", 1);

animal.shout();
dog.shout();