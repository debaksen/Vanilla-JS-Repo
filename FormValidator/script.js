const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input , message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success 

function showSuccess(input , message){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check email is valid

    function checkEmail(input){
        
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(re.test(input.value.trim())){
            showSuccess(input);
        }
        else {
            showError(input, 'Email is not valid');
        }
    }

// Check required fileds

function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        
        if(input.value.trim() == ''){
            showError(input , `${getFieldName(input)} is required`)
        }else {
            showSuccess(input);
        }

    });
}

// Get field name

function getFieldName(input){

    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// Check input length
function checkLength(input,min,max){
    let len = input.value.length;
    
    if(len < min){
        showError(input, `${getFieldName(input)} must be greater than ${min} characters`);
    }
    else if(len > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }

    else {
        showSuccess(input);
    }
}

// Function check matched password 

function checkPasswordMatch(input1 , input2){
    if(input1.value !== input2.value){
        showError(input2 , 'Enter your password correctly');
    }
}

// Event listeners
form.addEventListener('submit' , function(e){
   e.preventDefault();
   
   checkRequired([username, email, password, password2]);
   checkLength(username , 3, 15);
   checkLength(password , 6 , 24); 
   checkEmail(email);
   checkPasswordMatch(password,password2);


});