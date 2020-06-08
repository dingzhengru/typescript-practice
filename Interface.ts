/*
  不用 Interface 的情況
*/
function printInfo(labeledObj: { name: string, age: number }) {
  console.log(labeledObj.name, labeledObj.age);
}
/*
  使用 Interface 的情況
  "?" 代表此屬性是 optional，官方文件是於 Function 中講解
*/

interface Info {
  name: string;
  age: number;
  email?: string;
}

function printInfoByInterface(labeledObj: Info):void {
  console.log(labeledObj.name, labeledObj.age);
}

let obj = {name: 'ding', age: 10};

printInfo(obj);
printInfoByInterface(obj);

/*
  也可以直接把 Interface 當型態宣告
*/

let infoObj: Info = {name: 'ding2', age: 20};
printInfoByInterface(infoObj);

/*
  設定 Interface 屬性宣告後，只能讀取，不能修改
  readonly vs const :
    * readonly 是針對屬性
    * const 是針對變數
*/

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.