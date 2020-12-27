
function* idMaker() {
  let index = 0;
  while (true)
    yield index++;
}

let gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
function* fontGenerator(n = 10) {
  let fontSize = n;
  while (true) {
    const c = yield fontSize;

    if (c === '+') {
      fontSize = fontSize + 2;
    } else {
      fontSize = fontSize - 2;
    }
  }
}
let fonts = fontGenerator(14);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('-').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
