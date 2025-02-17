/*
Завдання №1

У кожному з методів повторюються:

1) Отримання списку ключів з об’єкта
2) Цикл for, у якому ми призначаємо ці значення
*/

// Мій рефакторинг:

// допоміжний метод для використання переданої функції на кожному ключі

function forEachKey(obj, callback) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    callback(keys[i]);
  }
}

// власне очищені методи

ctx.prototype.__applyStyleState = function (styleState) {
  forEachKey(styleState, (key) => {
    this[key] = styleState[key];
  });
};

ctx.prototype.__setDefaultStyles = function () {
  forEachKey(STYLES, (key) => {
    this[key] = STYLES[key].canvas;
  });
};

ctx.prototype.__getStyleState = function () {
  var styleState = {};
  forEachKey(STYLES, (key) => {
    styleState[key] = this[key];
  });
  return styleState;
};