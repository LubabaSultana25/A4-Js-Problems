
// Problem 04: Make A Great Password

function password(obj) {
    if (typeof obj !== "object" || obj === null) {
        return "Opps! Try correctly";
    }

    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "Opps! Try correctly";
    }

    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "Opps! Try correctly";
    }

    const firstLetter = obj.siteName.charAt(0).toUpperCase();
    const password = firstLetter + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;


    return password;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [ 1, 18, -19 ]
console.log(deleteInvalids(["1", { num: 2 }, NaN])); // Output: []
console.log(deleteInvalids([1, 2, -3])); // Output: [ 1, 2, -3 ]
console.log(deleteInvalids({ num: [1, 2, 3] })); // Output: "Invalid Array"