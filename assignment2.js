// Problem-02 Good Name, Bad Name
function checkName(name) {

    if (typeof name !== 'string') {
        return "Invalid; Please Input a string";
    }
    const characterEndings = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastChar = name.toLowerCase()[name.length - 1];

    let isBadName = true;
    for (let i = 0; i < characterEndings.length; i++) {
        if (characterEndings[i].toLowerCase() === lastChar) {
            isBadName = false;
        }
    }

    if (isBadName) {
        return "Bad Name";
    }
    else {
        return "Good Name";
    }
}
console.log(checkName("Salman")); // Output: Bad Name
console.log(checkName("RAFEE")); // Output: Good Name
console.log(checkName("Jhankar")); // Output: Bad Name
console.log(checkName("199")); // Output: invalid
console.log(checkName(["Rashed"])); // Output: invalid