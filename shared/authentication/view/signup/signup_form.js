
const signupUrl = 'http://localhost/delta-fitness/shared/authentication/api/signup.php';
const signinUrl = 'http://localhost/delta-fitness/shared/authentication/api/signin.php';
const homeUrl = '../../../../delta/landing-page/index.html';
const request = new XMLHttpRequest();

const signinBtn = document.querySelector(".signinBtn");

const signupBtn = document.querySelector(".signupBtn");

const formBox = document.querySelector(".formBox");

signupBtn.onclick = function () {
    formBox.classList.add("active");
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

        request.onload = () => {
            let responseObject = null;

            try {
                responseObject = JSON.parse(request.responseText);

            } catch {
                console.error('Could not parse JSON!');
            }


            if (responseObject) {
                handleSignUpResponse(responseObject);
            }
        }

        request.open('post', signupUrl, true);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(form));


    });

    function handleSignUpResponse(responseObject) {
        if(responseObject.status){
            while(formMessages.firstChild){
                formMessages.removeChild(formMessages.firstChild);
            }
            responseObject.messages.forEach(message => {
                const li = document.createElement('li');
                li.textContent = message;
                formMessages.appendChild(li);
            });
            formMessages.style.color = ' #fdfdfd';
            formMessages.style.boxShadow = '2px 2px 35px  #037803';
            formMessages.style.backgroundColor = '#00ad2a';
            formMessages.style.display = 'block';
                
            setTimeout(() =>{
                formMessages.style.display = 'none';
            }, 5000)
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


document.getElementById('login-btn').addEventListener('click',(e) =>{
    e.preventDefault();
    const form = {
        email : document.getElementById('login-email').value, 
        password : document.getElementById('login-password').value,
    }
    
    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);

        } catch {
            console.error('Could not parse JSON!');
        }


        if (responseObject) {
            handleLoginResponse(responseObject);
        }
    }

    request.open('post', signinUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(form));
});

function handleLoginResponse(responseObject) {
    if(responseObject.status){
        console.log('before redirecting');
        console.log('Sign in success');
        window.location.replace(homeUrl);
        console.log('after redirecting..');
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


// handing with ajax jquery 


// document.getElementById('login-btn').addEventListener('click', (e) =>{
//     e.preventDefault();

//     const form = {
//         email : document.getElementById('login-email').value, 
//         password : document.getElementById('login-password').value,
//     }

//     let encodedData = JSON.stringify(form);

//     $.ajax(
//         {
//             type : 'POST',
//             url : signinUrl,
//             data : encodedData,
//             headers: {
//               'Content-Type': 'application/json', 
//             },
//             success: function(responseObj) {
//               if(responseObj.status){
//                 console.log('success');
//               }else{
//                 console.log('failed');
//               }
//             },
//             error: function() {
//               console.error('There was some error performing the AJAX call!');
//             }
//          }
//       );

// })


