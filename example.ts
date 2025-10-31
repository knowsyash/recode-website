// ----------------------------
// 1️⃣ Basic Types
// ----------------------------
let username: string = "Yash";
let age: number = 22;
let isActive: boolean = true;

// You can also use type inference (TypeScript guesses the type)
let country = "India"; // type = string

// ----------------------------
// 2️⃣ Arrays and Tuples
// ----------------------------
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "mango"];

// Tuple — fixed order and types
let person: [string, number] = ["Alice", 25];

// ----------------------------
// 3️⃣ Functions
// ----------------------------
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(username));

// Function with optional and default parameters
function add(a: number, b: number = 10): number {
  return a + b;
}
console.log(add(5)); // Output: 15

// ----------------------------
// 4️⃣ Interfaces
// ----------------------------
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

let user1: User = {
  id: 1,
  name: "Yash",
};

console.log(user1);

// ----------------------------
// 5️⃣ Classes
// ----------------------------
class Animal {
  constructor(public name: string, private sound: string) {}

  makeSound(): void {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Dog", "Woof!");
dog.makeSound();

// ----------------------------
// 6️⃣ Enums
// ----------------------------
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0 (index)

// ----------------------------
// 7️⃣ Generics
// ----------------------------
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("TypeScript Rocks!"));
console.log(identity<number>(123));

// ----------------------------
// 8️⃣ Union Types
// ----------------------------
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("A102");

// ----------------------------
// 9️⃣ Type Aliases
// ----------------------------
type Point = {
  x: number;
  y: number;
};

const p1: Point = { x: 10, y: 20 };
console.log(p1);
