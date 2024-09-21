const palindromes = function (str) {
    const strLowercaseAndWithoutPunctuation = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase().trim();
    const arr = strLowercaseAndWithoutPunctuation.split('');
    const reversedString = arr.reverse().join('');
    return reversedString === strLowercaseAndWithoutPunctuation;
};

// Do not edit below this line
module.exports = palindromes;
