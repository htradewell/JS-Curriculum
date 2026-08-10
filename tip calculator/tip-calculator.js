function calculateTip(bill, tipPercentage){
    const tip = bill*tipPercentage/100;
    const total = bill+tip;
    return `your total is ${total} and your tip is ${tip}`;
}
const result = calculateTip(50, 20);
console.log(result);