const repeatString = function (str, repeatAmount) {
    if (repeatAmount < 0) {
        return "ERROR";
    }

    let newString = "";
    for (let i = 0; i < repeatAmount; i++) {
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
