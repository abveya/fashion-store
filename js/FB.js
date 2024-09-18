//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();


    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const isValid = true;


    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordPattern.test(newPassword)) {
        passwordError.textContent = 'Password must be at least 8 characters and include at least one number and one special character.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (newPassword !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }
    if (isValid) {
        window.location.href = 'index.html';
    }
});

document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('login-email-error');
    const isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (isValid) {
        window.location.href = 'FB2.html';
    }
});