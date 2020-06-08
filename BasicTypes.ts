/*

Boolean
Number
String
Array
Tuple
Enum
Any
Void
Null and Undefined
Object
Never
*/

let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let list: Array<number> = [1, 2, 3];
let tuple: [string, number] = ['hello', 10]; // x = [10, "hello"]; // Error
enum Color {Red, Green, Blue}
let notSure: any = 4;

function warnUser(): void {}

let u: undefined = undefined;
let n: null = null;

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error