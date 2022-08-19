document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithDrawAmount = getInputValueById('withdraw-feild');
    if (isNaN(newWithDrawAmount)) {
        alert('Please use valid number');
        return;
    }
    const previousTotalWithdraw = getElementValueById('withdraw-total');
    // এটা নিচে নেওয়া হইছে
    // const totalWithdraw = previousTotalWithdraw + newWithDrawAmount;
    // setElement('withdraw-total', totalWithdraw);

    const totalBalancebeforeWithdraw = getElementValueById('previous-total-amount');

    //  ‍ এই   if function ব্যবহার করা হয়েছে যাতে কেউ যদি মোট টাকা থেকে বেশি টাকা তুলতে চায় তাহলে তাকে  একটা এলা্রট  দিবে 
    if (totalBalancebeforeWithdraw < newWithDrawAmount) {
        alert('Vai ami gorib amar kace ato taka nai');
        return;
    }
    const totalWithdraw = previousTotalWithdraw + newWithDrawAmount;
    setElement('withdraw-total', totalWithdraw);

    const currentBalance = totalBalancebeforeWithdraw - newWithDrawAmount;
    setElement('previous-total-amount', currentBalance)
})