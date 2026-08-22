"use strict";
function getElementWidth(content, padding, border) {
  const c = parseFloat(content);
  const p = parseFloat(padding);
  const b = parseFloat(border);
  return c + p * 2 + b * 2;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
