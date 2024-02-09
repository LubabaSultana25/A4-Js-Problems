
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

