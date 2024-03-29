
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


// Test cases
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); // Output: Facebook#rahat@2002
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" })); // Output: Invalid
console.log(password({ name: "maisha", birthYear: 2002 })); // Output: Invalid
console.log(password("invalid input")); // Output: Invalid