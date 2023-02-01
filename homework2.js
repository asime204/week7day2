//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function showFavFood(person) {
    console.log(`Pizza: ${person.pizza}`);
    console.log(`Tacos: ${person.tacos}`);
    console.log(`Burgers: ${person.burgers}`);
    console.log(`Ice Cream: ${person.ice_cream}`);
    console.log(`Shakes:`);
    for (let key in person.shakes[0]) {
      console.log(`${key}: ${person.shakes[0][key]}`);
    }
  }
  
  showFavFood(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
    addAge(years) {
        this.age += years;
    }
}
  
  
  
  const person1 = new Person("Will Smith", 35);
  const person2 = new Person("Jack Black", 40);
  
  person1.printInfo();
  person2.printInfo();
  
  person2.addAge(3);
  
  person2.printInfo();
  
  
  
  

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small number");
      }
    });
  }
  
  checkStringLength("This is Sparta!")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });