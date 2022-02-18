function inputData(input){
    const inputField = document.getElementById(input + '-value');
    const inputValue = parseInt(inputField.value);
    return inputValue;

}
function resultData(result){
    const resultField = document.getElementById(result)
    return resultField;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeValue = inputData('income');
    const foodValue = inputData('food');
    const rentValue = inputData('rent');
    const clothValue = inputData('cloth');

    const expense = foodValue + rentValue + clothValue;
    const balance = incomeValue - expense;

    resultData('total-expense').innerText=expense;
    resultData('balance').innerText=balance;
    

});