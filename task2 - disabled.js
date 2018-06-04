/* Task 2 */

"use strict";

var d = parseInt(process.argv[2]),
    m = process.argv[3],
    y = parseInt(process.argv[4]),
    counter = 0;

if (d >= 1 && d <= 31 && y >= 1 && y <= 2999) {
    switch (m) {
        case "января":
            counter = 365 - d;
            if (y % 4 == 0) {
                counter++;
            };
            break;
        case "февраля":
            counter = 365 - 31 - d;
            if (y % 4 == 0) {
                counter++;
            };
            break;
        case "марта":
            counter = 365 - 31 - 28 - d;
            break;
        case "апреля":
            counter = 365 - 31 - 28 - 31 - d;
            break;
        case "мая":
            counter = 365 - 31 - 28 - 31 - 30 - d;
            break;
        case "июня":
            counter = 365 - 31 - 28 - 31 - 30 - 31 - d;
            break;
        case "июля":
            counter = 365 - 31 - 28 - 31 - 30 - 31 - 30 - d;
            break;
        case "августа":
            counter = 31 + 30 + 31 + 30 + 31 - d;
            break;
        case "сентября":
            counter = 30 + 31 + 30 + 31 - d;
            break;
        case "октября":
            counter = 31 + 30 + 31 - d;
            break;
        case "ноября":
            counter = 30 + 31 - d;
            break;
        case "декабря":
            counter = 31 - d;
            break;
    }
    process.stdout.write(`${counter}`);
}
