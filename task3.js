/* Task 3 */

"use strict";

var t1 = parseFloat(process.argv[2]),
    t2 = parseFloat(process.argv[3]),
    hours = 0,
    minutes = 0,
    seconds = 0,
    date = "";

if (t1 >= 1 && t1 <= 100000 && t2 >= 1 && t2 <= 100000) {
    var t = t1 + t2;
    hours = Math.trunc(t / 3600);
    minutes = Math.trunc((t - hours * 3600) / 60);
    seconds = t % 60;
};

if (hours != 0) {
    date = String(hours);
    if (hours == 1 || hours == 21 || hours == 31 || hours == 41 || hours == 51) {
        date += " час ";
    } else if (hours < 5 || hours > 21 && hours < 25 || hours > 31 && hours < 35 || hours > 41 && hours < 45 || hours > 51 && hours < 55) {
        date += " часа ";
    } else {
        date += " часов ";
    }
};

if (minutes != 0) {
    date += String(minutes);
    if (minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
        date += " минута ";
    } else if (minutes < 5 || minutes > 21 && minutes < 25 || minutes > 31 && minutes < 35 || minutes > 41 && minutes < 45 || minutes > 51 && minutes < 55) {
        date += " минуты ";
    } else {
        date += " минут ";
    }
};

if (seconds != 0) {
    date += String(seconds);
    if (seconds == 1 || seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51) {
        date += " секунда";
    } else if (seconds < 5 || seconds > 21 && seconds < 25 || seconds > 31 && seconds < 35 || seconds > 41 && seconds < 45 || seconds > 51 && seconds < 55) {
        date += " секунды";
    } else {
        date += " секунд";
    }
};

if (date != "") {
    process.stdout.write(date);
}
