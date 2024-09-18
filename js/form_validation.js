//navboxclick
function showSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'flex'
  }
  function hideSidebar(){
    const downdropbar = document.querySelector('.downdropbar')
    downdropbar.style.display = 'none'
  }
document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();


    let isValid = true;

    if (!/^[A-Za-z]+$/.test(name)) {
        showError('nameError', 'Name is required and must be alphabetic.');
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('emailError', 'Email is required and must be in a valid format.');
        isValid = false;
    }

    if (subject.length < 5) {
        showError('subjectError', 'Subject is required and must be at least 5 characters.');
        isValid = false;
    }

    if (message.length < 10) {
        showError('messageError', 'Message is required and must be at least 10 characters.');
        isValid = false;
    }


    if (isValid) {
        console.log('Form is valid and ready to be submitted.');
    }
});

function clearErrors() {
    document.querySelectorAll('.error').forEach(element => {
        element.textContent = '';
    });
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

