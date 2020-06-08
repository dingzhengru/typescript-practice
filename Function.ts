/*
  Typing the function
*/
function add2(x: number, y: number): number {
  return x + y;
}
console.log(add2(1, 2))

/*
  Optional Parameters 
*/
function add3(x: number, y: number, z?:number): number {
  if(z) {
    return x + y + z;
  }
  return x + y;
}
console.log(add3(1, 2, 3))

/*
  Default Parameters
    會自動偵測傳進來的型態是否與預設值的型態相同
*/
function add4(x: number, y: number, z = 3): number {
  return x + y + z;
}
// console.log(add4(1, 2, '1')) // [ERROR]: Argument of type '"1"' is not assignable to parameter of type 'number | undefined'.
console.log(add4(1, 2)) // 6
console.log(add4(1, 2, 4)) // 7

/*
  Rest Parameters: ...符號
*/

// restOfName: string[]，會把後面所有參數組成一個 []，若裡面有不是 string 的參數就會報錯
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// will be "Joseph Samuel Lucas MacKinzie"
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie"));

/*
  Overload 超載(同函數名稱，定義不同參數)，在 Typescript 是不行的
  但可以透過 | 與 ? 等符號來應對， | 代表或者，? 代表可選
    
*/
function sum(...nums: number[] | string[]): number {
  let sum = 0;
  for(const num of nums) {
    sum = sum + Number(num);
  }
  return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9));
console.log(sum('10','20','30'));
