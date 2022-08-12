import {trainingBenefitList} from './offers.js';

let request = new XMLHttpRequest();
let isAuthenticated = false;

let sessionUrl = '../../shared/authentication/api/session.php';
let signinUrl = '../../shared/authentication/view/signup/signup_form.html';

function getStandardOffers() {
    let price1 = document.getElementById('price1');
    let offers1 = document.getElementById('offers1');
    let checkMarks1 = document.getElementById('check-marks1');
    let standards = trainingBenefitList.filter(benefit => benefit.id == 1);
    for (var i = 0; i < standards.length; i++) {
        price1.innerHTML = '$' + standards[i].price;
        standards[i].offers.forEach(offer => {
            // console.log(offer.name)
            offers1.innerHTML += '<div>' + offer.name + '</div>';
            if (offer.isAvailable == true) {
                checkMarks1.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
            } else {
                checkMarks1.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
            }
        }
        );

    }
}

function getPremiumOffers() {
    let price2 = document.getElementById('price2');
    let offers2 = document.getElementById('offers2');
    let checkMarks2 = document.getElementById('check-marks2');
    let premiums = trainingBenefitList.filter(benefit => benefit.id == 2);
    for (var i = 0; i < premiums.length; i++) {
        price2.innerHTML = '$' + premiums[i].price;
        premiums[i].offers.forEach(offer => {
            // console.log(offer.name)
            offers2.innerHTML += '<div>' + offer.name + '</div>';
            if (offer.isAvailable == true) {
                checkMarks2.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
            } else {
                checkMarks2.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
            }
        }
        );

    }
}

function getExpertOffers() {
    let price3 = document.getElementById('price3');
    let offers3 = document.getElementById('offers3');
    let checkMarks3 = document.getElementById('check-marks3');
    let experts = trainingBenefitList.filter(benefit => benefit.id == 3);
    for (var i = 0; i < experts.length; i++) {
        price3.innerHTML = '$' + experts[i].price;
        experts[i].offers.forEach(offer => {
            // console.log(offer.name)
            offers3.innerHTML += '<div>' + offer.name + '</div>';
            if (offer.isAvailable == true) {
                checkMarks3.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
            } else {
                checkMarks3.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
            }
        }
        );

    }
}


getStandardOffers();
getPremiumOffers();
getExpertOffers();

function onOfferButtonClick(event) {
    if (event.target.nodeName === 'BUTTON') {
        navigateToBillingPage(event.srcElement.id);
    }
}


window.addEventListener('click', onOfferButtonClick);

function navigateToBillingPage(offerId) {

   var id= Number.parseInt(offerId);
    if(id > 0 || id < 4){
        if(isAuthenticated){
            window.open(`billing/billing.html?id=${id}`, '_blank');
        } else{
            window.open(signinUrl, '_self');
        }
    }
}

function verifyUser(){
    request.onload = () =>{
       let responseObject = null;
       try{
         responseObject = JSON.parse(request.responseText);

       }catch{
        console.error('Could not parse JSON!');
       }

       if(responseObject){
        handleResponse(responseObject);
       }

    }

    request.open('get', sessionUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

}

function handleResponse(responseObject){
  if(responseObject.status){
    isAuthenticated = true;
  }else{
    isAuthenticated = false;
  }
}

verifyUser();


