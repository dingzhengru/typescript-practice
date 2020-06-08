/*
  Decorator(裝飾器)，Python 有一樣的功能 
  *目前是實驗功能，未來可能會更改*
  可以針對指定的 class 使用，並認證或更改其 class
*/

function testable(isTestable: boolean) {
  return function(target: any) {
    target.isTestable = isTestable
  }
}

@testable(true)
class OurClass {}

console.log("OurClass: ", OurClass.isTestable); // => OurClass: true