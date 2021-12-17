const loginBtn = document.getElementById("loginVerify");

loginBtn.addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("login-area").style.display = "none"

    document.getElementById("trasction-area").style.display = "block"
});

//Deposit Handler

const depositBtn = document.getElementById("depositBtn");

depositBtn.addEventListener("click", function(){

    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";

    //deposit to Balance
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = depositNumber + currentBalanceNumber;

    document.getElementById("currentBalance").innerText = totalBalance;

})


// Withdraw Handler

const withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat (currentWithdraw);
    const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;

    document.getElementById("currentWithdraw").innerText = totalWithdraw;
    

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBal = currentBalance - withdrawAmountNumber;

    document.getElementById("currentBalance").innerText = totalBal;


})