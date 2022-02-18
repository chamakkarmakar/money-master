// input field handling
function inputData(input) {
    const inputField = document.getElementById(input + '-value');
    const inputValue = parseInt(inputField.value);
    return inputValue;
}
// result field handling
function resultData(result) {
    const resultField = document.getElementById(result);
    return resultField;
}
// Event for Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = inputData('income');
    const foodValue = inputData('food');
    const rentValue = inputData('rent');
    const clothValue = inputData('cloth');

    if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
        alert("please give valid number");
    }
    else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0) {
        alert("please give positive type number");
    }

    else {
        const expenses = foodValue + rentValue + clothValue;
        if (expenses > incomeValue) {
            alert("you can not spent more money than income");
        }
        else {
            resultData('total-expense').innerText = expenses;
            const balance = incomeValue - expenses;
            resultData('balance').innerText = balance;
        }
    }
});
// Event for Saving Button 
document.getElementById("save-btn").addEventListener("click", function () {

    // saving amount
    const saveParcent = inputData("saving");
    const incomeValue = inputData("income");

    const savingAmount = incomeValue * (saveParcent / 100);
    resultData("saving-amount").innerText = savingAmount;

    // remaining balance
    const balance = resultData("balance").innerText;
    const remainingBalnce = balance - savingAmount;
    resultData("Remaining-Balance").innerText = remainingBalnce;

});
