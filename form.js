const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const correctUser = 'new_user';
const passCorrect = 123456789;


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();


    if (usernameValue === '' || usernameValue !== correctUser) {
        setErrorFor(username, 'Please, insert valid username');
    } else {
        setSuccessFor(username);
    }



    if (passwordValue === '' || parseFloat(passwordValue) !== passCorrect) {
        setErrorFor(password, 'Please, insert valid password');
    } else {
        setSuccessFor(password);
    }

    if (usernameValue === correctUser && parseFloat(passwordValue) === passCorrect) {
        // Style main message for success
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}