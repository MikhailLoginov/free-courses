/* Task 2 */

"use strict";

var d = +process.argv[2],
    m = process.argv[3],
    y = +process.argv[4],
    counter = 0,
    err = false;

switch (m) {
    case "января":
        counter = 365 - d;
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
            counter++;
        };
        break;
    case "февраля":
        counter = 365 - 31 - d;
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
            counter++;
        };
        if (d > 29 || (d == 29 && y % 4 != 0)) {
            err = true;
        }
        break;
    case "марта":
        counter = 365 - 31 - 28 - d;
        break;
    case "апреля":
        counter = 365 - 31 - 28 - 31 - d;
        if (d == 31) {
            err = true;
        }
        break;
    case "мая":
        counter = 365 - 31 - 28 - 31 - 30 - d;
        break;
    case "июня":
        counter = 365 - 31 - 28 - 31 - 30 - 31 - d;
        if (d == 31) {
            err = true;
        }
        break;
    case "июля":
        counter = 365 - 31 - 28 - 31 - 30 - 31 - 30 - d;
        break;
    case "августа":
        counter = 31 + 30 + 31 + 30 + 31 - d;
        break;
    case "сентября":
        counter = 30 + 31 + 30 + 31 - d;
        if (d == 31) {
            err = true;
        }
        break;
    case "октября":
        counter = 31 + 30 + 31 - d;
        break;
    case "ноября":
        counter = 30 + 31 - d;
        if (d == 31) {
            err = true;
        }
        break;
    case "декабря":
        counter = 31 - d;
        break;
    default:
        err = true;
        break;
}
if (!err) {
    //process.stdout.write('${ counter }');
    console.log(counter);
}
