
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
