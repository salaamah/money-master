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
    if (!isNaN(str) && parseFloat(str) >= 0){
        return parseFloat(str);
    }
    else if(parseFloat(str) < 0){
        return "Can't be negative";
    }
    else{
        return "Invalid number!";
    }
}
/*We may need these variables in some different functions. So that we have declared them as global variables*/
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
        if (totalExpense>incomeAmount){
            innerValue('balance', 'Expense is higher than Income');
        }else{
            innerValue('balance', balance);
        }
    }
})

document.getElementById('save-btn').addEventListener('click', function(){
    const savePercent = makeFloat(inputValue('save-percent'));
    //Exception Handling
    if(isNaN(savePercent)){
        inputValue('save-percent', savePercent);
    }else{
        const savingAmount = incomeAmount*savePercent/100;
        if (savingAmount>balance){
            const msg = "No enough balance. You can save "+balance*100/incomeAmount+"% atmost";
            innerValue('saving-amount', msg);
        }else{
            innerValue('saving-amount', savingAmount);
            const remaingBalance = balance - savingAmount;
            innerValue('remaining-balance', remaingBalance);
        }             
    }
})