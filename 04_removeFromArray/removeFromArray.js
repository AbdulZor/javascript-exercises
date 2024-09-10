const removeFromArray = function (arr, ...args) {
    // for each element in args
    //   check indexOf arg element in arr until you cannot find one (when return of indexOf is 1)
    //   if found, remove from index 1 element
    for (const arg of args) {
        let argIndex = arr.indexOf(arg);
        while(argIndex > -1) {
            arr.splice(argIndex, 1);
            argIndex = arr.indexOf(arg);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
