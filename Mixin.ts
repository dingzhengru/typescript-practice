/*
  TypeScript 並沒有 mixin 關鍵字，所以需要自行建立一個方法來達到此目的(官方有提供)
  Mixin 是讓 Object (or class) 可以使用其他物件的方法 & 屬性
*/

// 不知為何，完全複製的官方範例，卻執行不起來

// Disposable Mixin
// Disposable: 是否為"一次性"的意思
class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }
}

// Activatable Mixin
// Activatable: 是否可啟動
class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// 將此 Object (Class) 加上 "一次性" 與 "可啟動" 的屬性
class SmartObject {
    constructor() {
      setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
      this.activate();
    }
}

interface SmartObject extends Disposable, Activatable {}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}