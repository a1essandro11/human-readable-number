module.exports = function toReadable(number) {

    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var decades = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var hundredth = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var hundred = "hundred";
    var result = 0;
    if (number >= 0 && number < 10) {
        result = units[number];
        return result;;
    }
    if (number > 10 && number < 20) {
        result = decades[number - 11];
        return result;
    }
    if (number % 10 == 0 && number < 100) {
        result = hundredth[(number / 10) - 1];
        return result;
    }

    if (number % 10 !== 0 && number < 100) {

        result = hundredth[((number - (number % 10)) / 10) - 1] + " " + units[number % 10];

        return result;
    }

    if (number % 100 == 0) {
        result = units[number / 100] + " " + hundred;
        return result;
    }

    if (number % 100 !== 0 && number < 1000) {
        if (number % 10 !== 0) {
            result = units[(number - number % 100) / 100] + " " + hundred + " " + hundredth[((number - (number - number % 100) - number % 10) / 10) - 1] + " " + units[number % 10];

        }

        if (number % 100 > 10 && number % 100 < 20) {
            result = units[(number - number % 100) / 100] + " " + hundred + " " + decades[(number - (number - number % 100)) - 11];
        }

        if ((number - (number - number % 100)) % 10 == 0) {
            result = units[(number - number % 100) / 100] + " " + hundred + " " + hundredth[((number - (number - number % 100)) / 10) - 1];
        }


        if ((number - (number - number % 100) - number % 10) == 0) {
            result = units[(number - number % 100) / 100] + " " + hundred + " " + units[number % 10];

        }

        return result;
    }
}