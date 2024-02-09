
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


console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [ 1, 18, -19 ]
console.log(deleteInvalids(["1", { num: 2 }, NaN])); // Output: []
console.log(deleteInvalids([1, 2, -3])); // Output: [ 1, 2, -3 ]
console.log(deleteInvalids({ num: [1, 2, 3] })); // Output: "Invalid Array"