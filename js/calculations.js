function inputValue(id){
    return document.getElementById(id);
}
function innerValue(id){
    return document.getElementById(id);
}
function makeFloat(str){
    if (parseFloat(str)==NaN || parseFloat(str)<0){
        return "Please give a valid and positive numeric value";
    }
    else{
        return parseFloat(str);
    }
}

let incomeAmount, balance, totalExpense;
document.getElementById('calculate-btn').addEventListener('click', function(){
    incomeAmount = makeFloat(inputValue('income-amount').value);
    const foodAmount = makeFloat(inputValue('food-amount').value);
    const rentAmount = makeFloat(inputValue('rent-amount').value);
    const clothesAmount = makeFloat(inputValue('clothes-amount').value);
    totalExpense = foodAmount+rentAmount+clothesAmount;
    
    innerValue('total-expense').innerText = totalExpense;
    balance = incomeAmount - totalExpense;
    innerValue('balance').innerText = balance;

    inputValue('income-amount').value = "";
    inputValue('food-amount').value = "";
    inputValue('rent-amount').value = "";
    inputValue('clothes-amount').value = "";
})

document.getElementById('save-btn').addEventListener('click', function(){
    const savePercent = makeFloat(inputValue('save-percent').value)/100;

    const savingAmount = incomeAmount*savePercent;
    innerValue('saving-amount').innerText = savingAmount;

    const remaingBalance = balance - savingAmount;
    innerValue('remaining-balance').innerText = remaingBalance;

    inputValue('save-percent').value = "";
})

// document.getElementById('test-btn').addEventListener('click', function(){
//     console.log(parseInt(document.getElementById('test-input').value));
//     console.log(document.getElementById('test-input').value);
// })