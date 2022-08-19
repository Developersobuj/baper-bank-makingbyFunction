document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDeposit = getInputValueById('deposit-feild');
    if (isNaN(newDeposit)) {
        alert('Please Provide a Valid Number')
        return;
    }

    const previousTotalDeposit = getElementValueById('deposit-total');

    const totalDeposit = newDeposit + previousTotalDeposit;
    setElement('deposit-total', totalDeposit);

    const beforeDepositTotalBalance = getElementValueById('previous-total-amount');
    const currentTotalBalance = beforeDepositTotalBalance + newDeposit;
    setElement('previous-total-amount', currentTotalBalance);

})