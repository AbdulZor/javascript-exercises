const reverseString = function (str) {
    let reversedString = "";
    for (let i = str.length; i > 0; i--) {
        reversedString += str.slice(i - 1, i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
