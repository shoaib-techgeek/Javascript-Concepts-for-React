//It is compulsory to write import at the top of page
import Teacher, { promote } from "./teacher";

// This line refers to Modules Concept (Line:205) and import/export concept {Line: 222}
{
  //import default import, {Named import} from "./..."
  //import Teacher, { promote } from "./teacher";
  //Default import
  //import Teacher from "./teacher";
  //Named import
  //import {promote} from "./teacher";
}
//----------------------- var Variable -----------------------//
{
  function varHello() {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
    //Var variable scope -> function
    console.log(i);
  }
  varHello();
}
//----------------------- let Variable -----------------------//
{
  function letHello() {
    for (let i = 0; i < 5; i++) {
      //let scope ends here.
      //Var variable scope -> block
      console.log(i);
    }
    //Not accessible here
  }
  letHello();
}
//---------------------- const Variable ----------------------//
{
  const x = 1;
  // x = 2; Cannot do this because it is constant
}
//------------------------- Objects --------------------------//
{
  const person = {
    name: "Shoaib",
    walk() {},
    talk() {},
  };

  //.notation to access members -> When you know which object to access
  person.talk();
  person.name = "Shoaib Ali";

  //[] notation to access members -> When you don't know which object to access
  //e.g: name is passing from form then you are not sure to which object to access
  const targetMember = "name";
  person[targetMember.value] = "Ahmed Ali";
}
//----------------------- this keyword -----------------------//
{
  const user = {
    name: "Shoaib",
    walk() {
      console.log(this);
    },
  };

  //returns whole object
  user.walk();

  //returns default windows object
  const walk = user.walk;
  walk();

  //bind this to user object
  const walkBind = user.walk.bind(user);
  walkBind();
}
//----------------------- => functions -----------------------//
{
  //Default funtion
  const people = function (number) {
    return number * number;
  };

  //with one parameter
  const peopleFunc = (number) => number * number;
  console.log(peopleFunc(5));

  //with no parameter
  const peopleFuncs = () => 2 * 5;
  console.log(peopleFuncs(3));

  //with multiple parameter
  const peopleFuncss = (para1, para2) => para1 * para2;
  console.log(peopleFuncss(5, 2));

  //example

  const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
  ];

  //Default Funtion
  const jobsList = jobs.filter(function (job) {
    return job.isActive;
  });
  console.log(jobsList);

  // => function
  const jobList = jobs.filter((job) => job.isActive);
  console.log(jobList);
}
//------------------------ Array.map() -----------------------//
{
  //To render lists and arrays
  const colors = ["red", "blue", "green"];

  //without template literal
  const colorItems = colors.map((color) => "<li>" + color + "</li>");
  console.log(colorItems);

  //with template literal
  const colorItemList = colors.map((color) => `<li>${color}</li>`);
  console.log(colorItemList);
}
//------------------- Object Destructuring -------------------//
{
  const address = {
    country: "Pakistan",
    city: "Rawalpindi",
    street: "17",
  };

  //Default call
  const country1 = address.country;
  const city1 = address.city;
  const street1 = address.street;

  //Object Destructuring
  const { country, city, street } = address;

  //Object Destructuring with alias
  const { country: ct, city: ci, street: st } = address;
  const { street: sit } = address;
}
//--------------------- Spread Operator ----------------------//
{
  //------------ For Arrays ------------
  //For merging arrays
  const first = [1, 2, 3];
  const second = [4, 5, 6];

  //default way
  const combined = first.concat(second);
  console.log(combined);

  //Spread operator
  const combinedArray = [...first, ...second];
  console.log(combinedArray);

  //Benefit: Can also add elements anywhere
  const combinedAddArray = ["a", ...first, "b", ...second, 7];
  console.log(combinedAddArray);

  //------------ For Objects ------------
  const firstObject = { name: "Shoaib" };
  const secondObject = { education: "BSCS" };

  const combinedObject = {
    ...firstObject,
    ...secondObject,
    city: "Rawalpindi",
  };
  console.log(combinedObject);
}
//-------------------------- Classes -------------------------//
{
  class Person {
    constructor(name) {
      this.name = name;
    }

    walk() {
      console.log("walk");
    }
  }

  const personObj = new Person("shoaib");
  personObj.walk();
  console.log(personObj.name);

  //--------- Inheritance ----------//

  class Teacher extends Person {
    constructor(name, degree) {
      super(name);
      this.degree = degree;
    }

    teach() {
      console.log("teach");
    }
  }

  const teacher = new Teacher("Shoaib", "BSCS");

  const degree = teacher.degree;
  console.log(degree);

  teacher.walk();
  teacher.teach();
}
//-------------------------- Modules -------------------------//
{
  //For Modules I made 2 separate files for Classes: Person and Teacher
  const teacherObj = new Teacher("Ali", "BSSE");
  console.log(teacherObj);
  console.log(teacherObj.name);
}
//------------------ Named & Default Exports -----------------//
{
  //Refer to line 1: first block, and teacher.js file

  const teacherObject = new Teacher("Ahmed", "MCS");
  const promoteFunction = promote();
}
