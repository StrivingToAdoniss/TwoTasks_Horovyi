/*
Завдання №2

Задача:
Реалізувати функція curry, щоб вона повертала нам нову функцію для поступової передачі аргумепнтів

Нижче навів реалізацію, функція рекурсивна та замнена для збереження аргументів у контексті
*/

const curry = (f) => {
  return function curried(...args) {
    if (args.length >= f.length) {  // кількість переданих агрументів >= аргументам f
      return f(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);  // else, у якому повертаємо функцію, яка приймає решту аргументів і об'єднує із зібраними
    }
  };
};

// ваш приклад:
const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

console.log(curry(add)(1)(2)(3)(4)(5) === add(1, 2, 3, 4, 5)); // true
console.log(curry(multiply)(1)(2)(3) === multiply(1, 2, 3));     // true
