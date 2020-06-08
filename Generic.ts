/*
  Generics(泛型)，把型態"變數化"，去抓取使用者給的型態

*/

// T 代表使用者給的型態，可以是 string, number ...
function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}