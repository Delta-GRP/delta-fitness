const userUrl = 'http://localhost/delta-fitness/shared/data/api/user.php';
const userInfoUrl = 'http://localhost/delta-fitness/shared/data/api/user_details.php';
let request = new XMLHttpRequest();

let userFullName = document.getElementById('user-full-name');
let fullName = document.getElementById('full-name');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

init();

function init(){
    getUser();
  //  getUserInfo();
}

function getUser() {

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
    request.open('get', userUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

}

function handleResponse(response){

    if(response){
      response.forEach((user) =>{
        fname.value = user.first_name;
        lname.value = user.last_name;
        email.value = user.email;
        fullName.innerHTML = `${user.first_name} ${user.last_name}`;
        userFullName.innerHTML = `${user.first_name} ${user.last_name}`;

      })
    }
}



function getUserInfo() {

    request.onload = () => {

        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);

        } catch {
            console.error('Could not parse JSON!');
        }


        if (responseObject) {
           responseObject.forEach((userInfo) =>{
            phone.value = userInfo.phone;
           })
        }

    }
    request.open('get', userInfoUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

}


var loadFile = function(event) {
    let defaultIcon = document.getElementById('profile-icon');
	var image = document.getElementById('image-output');
    if(event.target.files[0]){
        console.log(event.target.files[0])
        image.style.display = 'block';
        defaultIcon.style.display = 'none';
        let imgUrl = URL.createObjectURL(event.target.files[0]);
        image.src = imgUrl;

    }

}