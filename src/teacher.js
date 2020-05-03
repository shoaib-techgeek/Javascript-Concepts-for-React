import { Person } from "./person";

//default for default export
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

//Named export
export function promote() {
  console.log("Promote Function");
}
