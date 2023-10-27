const calculateLoan = () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const months = parseInt(document.getElementById("months").value);
    
    if (isNaN(amount) || isNaN(interest) || isNaN(months)) {
        document.getElementById("result").innerHTML = `<p>Please enter valid values for all fields.</p>`;
        return;
    }

    const monthlyInterest = interest / 100 / 12;
    const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - amount;

    document.getElementById("result").innerHTML = `
        <h2>Results:</h2>
        <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
}
