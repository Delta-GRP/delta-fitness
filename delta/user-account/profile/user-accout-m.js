const userUrl = "http://localhost/delta-fitness/shared/data/api/user.php";
const userInfoUrl =
    "http://localhost/delta-fitness/shared/data/api/user_details.php";

const subscriptionPlansUrl =
    "http://localhost/delta-fitness/shared/data/api/subscriptions.php";

let userFullName = document.getElementById("user-full-name");
let fullName = document.getElementById("full-name");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

var user = {
    id: "2",
    email: "janedoe@gmail.com",
    first_name: "Jane",
    last_name: "Doe",
};

let subscriptionPlans;

init();

function init() {
    getUser();
    getUserInfo();
    getSubscriptions();
}

function getUser() {
    let request = new XMLHttpRequest();
    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch {
            console.error("Could not parse JSON!");
        }

        if (responseObject) {
            handleResponse(responseObject);
        }
    };
    request.open("get", userUrl, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
}

function handleResponse(response) {

    if (response) {
        response.forEach((resUser) => {
            user = resUser;
            if (existInDOM(fname) ? (fname.value = resUser.first_name) : "");
            if (existInDOM(lname) ? (lname.value = resUser.last_name) : "");
            if (existInDOM(email) ? (email.value = resUser.email) : "");
            if (
                existInDOM(fullName)
                    ? (fullName.innerHTML = `${resUser.first_name} ${resUser.last_name}`)
                    : ""
            );
            if (
                existInDOM(userFullName)
                    ? (userFullName.innerHTML = `${resUser.first_name} ${resUser.last_name}`)
                    : ""
            );
        });
    }
}

function existInDOM(element) {
    if (typeof element != undefined && element != null) return true;
    return false;
}

function getUserInfo() {
    let request = new XMLHttpRequest();
    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch {
            console.error("Could not parse JSON!");
        }

        if (responseObject) {
            responseObject.forEach((userInfo) => {
                existInDOM(phone) ? phone.value = userInfo.phone : '';
            });
        }
    };
    request.open("get", userInfoUrl, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
}

function getSubscriptions() {
    const request = new XMLHttpRequest();
    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch {
            console.error("Could not parse JSON");
        }

        if (responseObject) {
            subscriptionPlans = responseObject;
        }
    };

    request.open("get", subscriptionPlansUrl);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
}

var loadFile = function (event) {
    let defaultIcon = document.getElementById("profile-icon");
    var image = document.getElementById("image-output");
    if (event.target.files[0]) {
        console.log(event.target.files[0]);
        image.style.display = "block";
        defaultIcon.style.display = "none";
        let imgUrl = URL.createObjectURL(event.target.files[0]);
        image.src = imgUrl;
    }
};


export function getUserObj() {
    return user;
}

export function getSubscriptionPlans(){
    return subscriptionPlans;
}
