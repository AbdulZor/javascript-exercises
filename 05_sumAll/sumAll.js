const sumAll = function(start, end) {
    // loop from start to end and add at each iteration the iteration number to the start.
    // return start;

    // start/end cannot be a negative integer, a floating point number, or not a number.
    if((start < 0  || end < 0) || (Math.floor(start) !== start || Math.floor(end) !== end) || (start === NaN || end === NaN)) {
        return "ERROR";
    }

    if (start > end) {
        let tempEnd = start;
        start = end;
        end = tempEnd;
    }

    for(let i = start+1; i <= end; i++) {
        // console.log(i);
        start += i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
