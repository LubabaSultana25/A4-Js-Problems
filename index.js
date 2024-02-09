// Problem -01: Help the zoo Manager
function calculateMoney(ticketSale) {
    const income = ticketSale * 120;
    const dailyCost = 500 + (8 * 50);
    const total = income - dailyCost;

    console.log(total);

    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        console.log("Give me a Positive Number");
        return;
    }
}

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



// Problem 05:Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input ";
    }
    let totalIncome = 0;
    let totalTax = 0;

    for (let i = 0; i < arr.length; i++) {
        totalIncome += arr[i];
        if (arr[i] >= 3000) {
            totalTax += arr[i] * 0.2;
        }
    }
    const totalCost = totalTax + livingCost;
    const savings = totalIncome - totalCost;

    if (savings >= 0) {
        return savings;

    }
    else {
        return "Earn More";
    }

}
