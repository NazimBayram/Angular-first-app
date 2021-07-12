// Primitives: number, string, boolean
// more complex types: arrays, objects
// Function types, parameters


//Primitives
let age: number;
age = 12.32;

//more complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//object types
type person = {
  name: string;
  age: number;
}

let person1: person;

person1 = {
  name: "Max",
  age: 34,
}

let people: {
  name: string;
  age: number;
}[];

//Type inference
let course: string | number = "Neyz"
course = 1234;

//Types
type Person = {
  name: string;
  age: number;
}

let peoples: Person[];

//Generics (flexible for all types but if one type is used, that type is logged and known (always string or number))
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a","b","c"],"d");

stringArray[0].split("") //error while using updatedArray[0].split("")

//Classes
class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[]

  constructor(first: string, last: string, age: number, courses: string []) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses;
  }
}

const student = new Student("Max", "Milos", 23, ["Math","GER"])
student.listCourses();

class Student2 {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses;
  }
}

const student2 = new Student2("Max2", "Milos2", 23, ["Math","GER"])
student2.listCourses();

//interfaces (just exists in TS not in JS -> will not be compiled to JS) /similar to type but can be implemented by classes
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!")
  }
}

class Instructor implements Human {
  firstName: string;
  age: number;

  greet: () => void;
}
