const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//SHOW INPUT ERROR MESSAGE
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small')
    small.innerText = message;

}

// show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}

//check email is valid
function isValidEmail(email) {
    const re = /^[-!#$%& '*+ /0-9=?A-Z^_a-z{| }~](\.?[-! #$%& '*+\/0-9=?A-Z^_a-z`{| }~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return re.test(string(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();


    if (username.value === '') {
    showError(username, 'Username is required');
    }   else {
    showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email); 
    } 
    
    
    if (password.value === '') {
    showError(password, 'Password is required');
    } else {
    showSuccess(password);

    }
    
    if (password2.value === '') {
       showError(password2, 'Confirm Password is required');
    } else {
        showSuccess(password2);
    
    } 
});


