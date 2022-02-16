let incomeAmount, balance;
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodAmount = parseInt(document.getElementById('food-amount').value);
    const rentAmount = parseInt(document.getElementById('rent-amount').value);
    const clothesAmount = parseInt(document.getElementById('clothes-amount').value);

    document.getElementById('total-expense').innerText = foodAmount+rentAmount+clothesAmount;
    
    incomeAmount = parseInt(document.getElementById('income-amount').value);

    balance = incomeAmount - (foodAmount+rentAmount+clothesAmount);
    document.getElementById('balance').innerText = balance;
})

document.getElementById('save-btn').addEventListener('click', function(){
    const savePercent = parseFloat(document.getElementById('save-percent').value)/100;

    const savingAmount = incomeAmount*savePercent;
    document.getElementById('saving-amount').innerText = savingAmount;

    const remaingBalance = balance - savingAmount;
    document.getElementById('remaining-balance').innerText = remaingBalance;
})