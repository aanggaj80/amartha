// Login Form
const loginForm = document.getElementById('loginForm');
const togglePassword = document.getElementById('toggleLoginPassword');

if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        const passwordField = document.getElementById('loginPassword');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
}

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulasi login
    setTimeout(() => {
        // Simpan ke localStorage sebagai demo
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userPhone', phone);
        window.location.href = 'dashboard.html';
    }, 1500);
});

// Auto login check
if (localStorage.getItem('userLoggedIn') === 'true') {
    window.location.href = 'dashboard.html';
}