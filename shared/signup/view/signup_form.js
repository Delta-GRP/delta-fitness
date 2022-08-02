// const url = '../api/signup.php';
const url = 'http://localhost/delta-fitness/shared/signup/api/signup.php';
const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");

const formBox = document.querySelector(".formBox");

signupBtn.onclick = function () {
    formBox.classList.add("active");

    // todo implement color change based on current 
    // state of the form;
}

signinBtn.onclick = function () {
    formBox.classList.remove("active");
}


const formMessages = document.getElementById('form-messages');
document.getElementById('signUpFormSubmitBtn')
    .addEventListener("click", (e) => {
        e.preventDefault();
        const form = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            passwordConfirmation: document.getElementById('passwordConfirmation').value,
        };

        const request = new XMLHttpRequest();

        request.onload = () => {
            let responseObject = null;

            try {
                responseObject = JSON.parse(request.responseText);

            } catch {
                console.error('Could not parse JSON!');
            }


            if (responseObject) {
                handleResponse(responseObject);
            }
        }

        request.open('post', url, true);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(form));


    });

function handleResponse(responseObject) {
    if(responseObject.status){
        console.log('Sign in success');
    }else{
        while(formMessages.firstChild){
            formMessages.removeChild(formMessages.firstChild);

        }
        responseObject.messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            formMessages.appendChild(li);
        });

        formMessages.style.display = 'block';
    
        setTimeout(() =>{
            formMessages.style.display = 'none';
        }, 3000)
       
    }
}

