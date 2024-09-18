//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
function showPopupMessage(message) {
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000); 
}

const signupContainer = document.getElementById('signup-container');
const loginContainer = document.getElementById('login-container');
const switchToLogin = document.getElementById('switchToLogin');
const switchToSignup = document.getElementById('switchToSignup');

switchToLogin.addEventListener('click', (event) => {
    event.preventDefault();
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

switchToSignup.addEventListener('click', (event) => {
    event.preventDefault();
    loginContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
});

document.getElementById('signup-container').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('signup-username').value;
    const usernameError = document.getElementById('signup-username-error');
    const usernameRegex = /^[a-zA-Z0-9 ]{3,15}$/;
    if (!usernameRegex.test(username)) {
        isValid = false;
        usernameError.textContent = 'Username must be 3-15 alphanumeric characters.';
    } else {
        usernameError.textContent = '';
    }

    const email = document.getElementById('signup-email').value;
    const emailError = document.getElementById('signup-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.textContent = '';
    }

    const password = document.getElementById('signup-password').value;
    const passwordError = document.getElementById('signup-password-error');
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters, with one number and one special character.';
    } else {
        passwordError.textContent = '';
    }

    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const confirmPasswordError = document.getElementById('signup-confirm-password-error');
    if (confirmPassword !== password) {
        isValid = false;
        confirmPasswordError.textContent = 'Passwords do not match.';
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        showPopupMessage('Sign-up successful!');
        window.location.href='index.html';
    }
});

document.getElementById('login-container').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById('login-email').value;
    const emailError = document.getElementById('login-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.textContent = '';
    }

    const password = document.getElementById('login-password').value;
    const passwordError = document.getElementById('login-password-error');
    if (password.length < 8) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        showPopupMessage('Login successful!');
        window.location.href='index.html';
    }
});

function toggle1(button) {
    const isSign = button.classList.toggle('favorite');
    button.textContent = isSign ? 'Sign Up' : 'SIGN UP';
}  

function toggle2(button) {
    const isLog = button.classList.toggle('favorite');
    button.textContent = isLog ? 'Log In' : 'LOG IN';
}




