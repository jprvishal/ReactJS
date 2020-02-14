class Human {
  constructor() {
    this.gender = "Female";
  }
  
  printHumanInfo() {
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(name, age, gender) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  printInfo() {
    console.log("Name:- " + this.name);
    console.log("Age:- " + this.age);
    console.log("Gender:- " + this.gender);
  }
}

class Human {
 
  gender = "Female";
  
  printHumanInfo = () => {
    console.log(this.gender);
  }
}

class Person extends Human{
  
	name = "Person1";
	age = 43;
	gender = "Male";
   
  printInfo = () => {
    console.log("Name:- " + this.name);
    console.log("Age:- " + this.age);
    console.log("Gender:- " + this.gender);
  }
}

const p1 = new Person("Vihsal", 43, "Male");
p1.printInfo();

var value = 10;
console.log(value);

value = 15;
console.log(value);

let valueUsingLet = 10;
console.log(valueUsingLet);

valueUsingLet = 15;
console.log(valueUsingLet);

const valueUsingConst = 25;
console.log(valueUsingConst);

// valueUsingConst = 35;
// console.log(valueUsingConst);

const numbers = [1, 2, 3];
console.log(numbers);

const newNumbers = [...numbers, 5, 6, 7]
console.log(newNumbers);

