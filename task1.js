/* Task 1 */

"use strict";

var i = process.argv[2],
    a = parseFloat(process.argv[3]),
    b = parseFloat(process.argv[4]),
    normal = 0,
    result = "",
    numberTranslation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var j = 0; j < i.length; j++) {
  var number;
  for (number = 0; number < numberTranslation.length & i[j].toLowerCase() != numberTranslation[number]; number++) {};
  normal += number * Math.pow(a, i.length - 1 - j);
}

while (normal >= b) {
  result = String(numberTranslation[normal % b]) + result;
  normal = Math.trunc(normal / b);
}
result = numberTranslation[normal] + result;

process.stdout.write(result);
