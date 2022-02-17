//Getting value or assigning a value in input field
function inputValue(id, value){
    if (arguments.length == 1){
        return document.getElementById(id).value;
    }else if(arguments.length == 2){
        document.getElementById(id).value = value;
    }    
}
//Assigning a value between text
function innerValue(id, value){
    document.getElementById(id).innerText = value;
}
//checking a string and returning value or warning msg
function makeFloat(str){
    if (!isNaN(str) && parseFloat(str) > 0){
        return parseFloat(str);
    }
    else{
        return "Give a valid and +ve number";
    }
}

let incomeAmount, balance, totalExpense;

document.getElementById('calculate-btn').addEventListener('click', function(){
    incomeAmount = makeFloat(inputValue('income-amount'));
    const foodAmount = makeFloat(inputValue('food-amount'));
    const rentAmount = makeFloat(inputValue('rent-amount'));
    const clothesAmount = makeFloat(inputValue('clothes-amount'));
    totalExpense = foodAmount+rentAmount+clothesAmount;

    //Exception Handling
    if(isNaN(totalExpense)){
        inputValue('income-amount', incomeAmount);
        inputValue('food-amount', foodAmount);
        inputValue('rent-amount', rentAmount);
        inputValue('clothes-amount', clothesAmount);
    }else{
        innerValue('total-expense', totalExpense);
        balance = incomeAmount - totalExpense;
        innerValue('balance', balance);
    }
})

document.getElementById('save-btn').addEventListener('click', function(){
    const savePercent = makeFloat(inputValue('save-percent'))/100;
    //Exception Handling
    if(isNaN(savePercent)){
        inputValue('save-percent', savePercent);
    }else{
        const savingAmount = incomeAmount*savePercent;
        innerValue('saving-amount', savingAmount);
        const remaingBalance = balance - savingAmount;
        innerValue('remaining-balance', remaingBalance);
    }
})
/*
document.getElementById('test-btn').addEventListener('click', function(){
    const val = document.getElementById('test-input').value;
    console.log(parseFloat(val));
    console.log(val);
    //console.log(isNan(val));
    console.log(Number(val));
    //console.log(isNumber(val));
})*/