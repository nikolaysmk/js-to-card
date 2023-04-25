// Object.assign
// Метод Object.assign() используется для копирования значений всех собственных перечислимых свойств из одного или более исходных объектов в целевой объект. Он возвращает целевой объект.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = { g: 7, h: 8, i: 9 };
const obj4 = { j: 10, k: 11, l: 12 };
const obj5 = { m: 13, n: 14, o: 15 };
const obj6 = { p: 16, q: 17, r: 18 };

let obj = Object.assign(obj1, obj2, obj3, obj4, obj5, obj6);
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18 }

// Object.create
// Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
obj = Object.create({ a: 1, b: 2, c: 3 });
console.log(obj); // {}

// Object.defineProperty
// Метод Object.defineProperty() позволяет определять новое свойство непосредственно на объекте, или изменять существующее свойство на объекте, и возвращать объект.
obj = Object.defineProperty({}, 'a', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(obj); // { a: 1 }

// Object.defineProperties
// Метод Object.defineProperties() позволяет определять новые свойства непосредственно на объекте, или изменять существующие свойства на объекте, и возвращать объект.
obj = Object.defineProperties(
  {},
  {
    a: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    b: {
      value: 2,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    c: {
      value: 3,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
console.log(obj); // { a: 1, b: 2, c: 3 }

// Object.entries
// Метод Object.entries() возвращает массив собственных перечислимых свойств указанного объекта в виде массивов [key, value], в том же порядке, в котором они предоставляются циклом for...in (различие в том, что цикл for-in также перечисляет свойства, доступные по цепочке прототипов).
obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Object.freeze
// Метод Object.freeze() замораживает объект: другие объекты не могут изменять его.
obj = { a: 1, b: 2, c: 3 };
Object.freeze(obj);
// obj.a = 4; // TypeError: Cannot assign to read only property 'a' of object '#<Object>'
console.log(obj); // { a: 1, b: 2, c: 3 }
