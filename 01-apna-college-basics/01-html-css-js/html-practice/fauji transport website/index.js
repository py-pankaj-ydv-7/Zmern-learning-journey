document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Default submit refresh rokne ke liye

    // Input values fetch karna
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    // Ek pyara sa confirmation message
    alert(`Thank you ${name}! Your inquiry for shifting from "${from}" to "${to}" has been submitted. We will call you on ${phone} shortly.`);
    
    // Form reset karne ke liye
    document.getElementById('quoteForm').reset();
});