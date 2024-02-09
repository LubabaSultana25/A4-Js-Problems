
// problem 03: Virus in my Array

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    let validNum = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            validNum.push(array[i]);
        }
    }
    return validNum;
}