function* idMaker() {
  let index = 0;
  while (true)
    yield index++;
}

let gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
function* fontGenerator(n = 14) {
  let fontSize = n;
  while (true) {
    let value = yield fontSize;

    if (value === '+') {
      yield (fontSize += 2);
    } else {
      yield (fontSize -= 2);
    }
  }
}
let fonts = fontGenerator();
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('-').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
console.log(fonts.next('+').value);
