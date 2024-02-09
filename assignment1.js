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
console.log(calculateMoney(10)); // Output: 300
console.log(calculateMoney(1055)); // Output: 125700