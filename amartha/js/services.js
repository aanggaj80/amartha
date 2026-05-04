// Services Page Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Category switching
    const categories = document.querySelectorAll('.category-card');
    const serviceDetails = document.querySelectorAll('.service-detail');
    
    categories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active category
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding service detail
            const targetId = this.getAttribute('href').substring(1);
            serviceDetails.forEach(detail => detail.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            // Smooth scroll to top
            document.querySelector('.service-detail.active').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Loan Calculator
    const loanAmount = document.getElementById('loanAmount');
    const loanTenor = document.getElementById('loanTenor');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const totalPayment = document.getElementById('totalPayment');
    const interestAmount = document.getElementById('interestAmount');

    function calculateLoan() {
        const amount = parseInt(loanAmount.value);
        const tenor = parseInt(loanTenor.value);
        const interestRate = 0.018; // 1.8% per bulan
        
        const monthlyInterest = amount * interestRate;
        const monthlyPayment = (amount + monthlyInterest) / tenor;
        const totalPay = monthlyPayment * tenor;
        const totalInterest = totalPay - amount;
        
        monthlyInstallment.textContent = 'Rp ' + Math.round(monthlyPayment).toLocaleString();
        totalPayment.textContent = 'Rp ' + Math.round(totalPay).toLocaleString();
        interestAmount.textContent = 'Rp ' + Math.round(totalInterest).toLocaleString();
    }

    loanAmount?.addEventListener('change', calculateLoan);
    loanTenor?.addEventListener('change', calculateLoan);
    
    // Initial calculation
    calculateLoan();
});