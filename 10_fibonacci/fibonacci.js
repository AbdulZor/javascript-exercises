const fibonacci = function (a) {
    const arr = [0, 1];
    if (a < 0) return "OOPS";
    if (a == 0) return 0;

    for (let i = 1; i < a; i++) {
        arr.push(arr[i - 1] + arr[i]);
    }
    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
