const findTheOldest = function (arr) {
    return arr.sort((a, b) => {
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            return a.yearOfBirth < b.yearOfBirth ? 1 : -1;
        }

        const totalLiveda = a.yearOfDeath - a.yearOfBirth;
        const totalLivedb = b.yearOfDeath - b.yearOfBirth;
        return totalLiveda > totalLivedb ? 1 : -1;
    }).pop();
};

// Do not edit below this line
module.exports = findTheOldest;
