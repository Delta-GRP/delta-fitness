import { trainingBenefitList } from '../offers.js';

const billingUrl = 'http://localhost/delta-fitness/shared/data/api/billing.php';

let currentPageUrl = window.location.href;

var url = new URL(currentPageUrl);
var offerId = url.searchParams.get("id");

let subscriptionId = parseInt(offerId);
var date = new Date();

let request = new XMLHttpRequest();

var selectedPrice = '';
var selectedPackage = '';
var totalCharge = 0;


const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const formMessages = document.getElementById('form-messages');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dateOfBirth = document.getElementById('dob');
const gender = document.getElementById('gender');
const houseNumber = document.getElementById('address');
const zipCode = document.getElementById('zip-code');
const state = document.getElementById('state');
const city = document.getElementById('city');
const country = document.getElementById('country');
const creditCardNumber = document.getElementById('credit-card');
const expiryDate = document.getElementById('expiry-date');
const cvv = document.getElementById('cvv');
const billingZipCode = document.getElementById('billing-zc');
const accHolderFirstName = document.getElementById('accFname');
const accHolderLastName = document.getElementById('accLname');
const accNumber = document.getElementById('accNumber');
const accRoutingNumber = document.getElementById('accRoutingNumber');

const iFname = document.getElementById('i-fname');
const iLname = document.getElementById('i-lname');
const iEmail = document.getElementById('i-email');
const iPhone = document.getElementById('i-phone');
const iAddress = document.getElementById('i-address');
const iZipCode = document.getElementById('i-zipcode');
const iState = document.getElementById('i-state');
const iCity = document.getElementById('i-city');
const iCountry = document.getElementById('i-country');
const iDate = document.getElementById('i-date');
const iCreditCard = document.getElementById('i-credit-card');
const iExpiryDate = document.getElementById('i-expiry');
const ICvv = document.getElementById('i-cvv');
const iBillingZipCode = document.getElementById('i-billing-zc');
const iAccHolderFirstName = document.getElementById('i-acc-fname');
const iAccHolderLastName = document.getElementById('i-acc-lname');
const iAccNumber = document.getElementById('i-acc-number');
const iAccRoutingNumber = document.getElementById('i-acc-routing-number');

const offer = document.getElementById('selected-offer');
const enrollmentFee = document.getElementById('enrollment-fee');
const monthlyFee = document.getElementById('monthly-fee');
const annualFee = document.getElementById('annual-fee');
const totalDue = document.getElementById('total');

let currentFormStepIndex = 0;

nextBtns.forEach(button => {
    button.addEventListener("click", () => {
        currentFormStepIndex++;
        updateFormSteps();
        updateProgressSteps();
    })
});

prevBtns.forEach(button => {
    button.addEventListener("click", () => {
        currentFormStepIndex--;
        updateFormSteps();
        updateProgressSteps();
    })
});

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    })
    formSteps[currentFormStepIndex].classList.add("form-step-active");
}


function updateProgressSteps() {
    progressSteps.forEach((progressStep, index) => {
        if (index < currentFormStepIndex + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


function getOffer() {
    const offerTitle = document.getElementById('offer-title');
    const price = document.getElementById('price');
    const offers = document.getElementById('offers');
    var offerL = trainingBenefitList.filter(benefit => benefit.id == offerId);
    for (let i = 0; i < offerL.length; i++) {
        price.innerHTML = '$' + offerL[i].price;
        selectedPrice = offerL[i].price;
        // console.log(offerL[i].title);
        offerTitle.innerHTML = offerL[i].title;
        selectedPackage = offerL[i].title;
        offerL[i].offers.forEach(offer => {
            if (offer.isAvailable) {
                offers.innerHTML += `<div> ${offer.name} </div>`;
            }
        })

    }
}

getOffer();

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    const form = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dateOfBirth: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        houseNumber: document.getElementById('address').value,
        zipCode: document.getElementById('zip-code').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        creditCardNumber: document.getElementById('credit-card').value,
        expiryDate: document.getElementById('expiry-date').value,
        cvv: document.getElementById('cvv').value,
        billingZipCode: document.getElementById('billing-zc').value,
        accHolderFirstName: document.getElementById('accFname').value,
        accHolderLastName: document.getElementById('accLname').value,
        accNumber: document.getElementById('accNumber').value,
        accRoutingNumber: document.getElementById('accRoutingNumber').value,
        subscriptionId:  subscriptionId,
        total : totalCharge
    }

    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch {
            console.error('Failed to Parse JSON');
        }

        if (responseObject) {
            handleResponseObject(responseObject);
        }
    }

    request.open('post', billingUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(form));
});


function handleResponseObject(responseObject) {
    if (responseObject.status) {
        console.log('Data sent successfully');
    } else {
        while (formMessages.firstChild) {
            formMessages.removeChild(formMessages.firstChild);
        }
        responseObject.messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            formMessages.appendChild(li);
        });

        formMessages.style.display = 'block';

        setTimeout(() => {
            formMessages.style.display = 'none';
        }, 5000)
    }
}



function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
iDate.innerHTML = getCurrentDate();

firstName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iFname.innerHTML = value;
    //  console.log(e.target.value)
});
lastName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iLname.innerHTML = value;
    //  console.log(e.target.value)
});
email.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iEmail.innerHTML = value;
    //  console.log(e.target.value)
});
phone.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iPhone.innerHTML = value;
    //  console.log(e.target.value)
});
houseNumber.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAddress.innerHTML = value;
    //  console.log(e.target.value)
});
zipCode.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iZipCode.innerHTML = value;
    //  console.log(e.target.value)
});
city.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iCity.innerHTML = value;
    //  console.log(e.target.value)
});
state.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iState.innerHTML = value;
    //  console.log(e.target.value)
});
creditCardNumber.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iCreditCard.innerHTML = value;
    //  console.log(e.target.value)
});
accNumber.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccNumber.innerHTML = value;
    //  console.log(e.target.value)
});
accRoutingNumber.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccRoutingNumber.innerHTML = value;
    //  console.log(e.target.value)
});
accHolderFirstName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccHolderFirstName.innerHTML = value;
    //  console.log(e.target.value)
});
accHolderLastName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccHolderLastName.innerHTML = value;
    //  console.log(e.target.value)
});
expiryDate.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iExpiryDate.innerHTML = value;
    //  console.log(e.target.value)
});

accHolderFirstName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccHolderFirstName.innerHTML = value;
    //  console.log(e.target.value)
});
accHolderLastName.addEventListener('keyup', (e) => {
    let value = e.target.value;
    iAccHolderLastName.innerHTML = value;
    //  console.log(e.target.value)
});
cvv.addEventListener('keyup', (e) => {
    let value = e.target.value;
    ICvv.innerHTML = value;
    //  console.log(e.target.value)
});


// fees

offer.innerHTML = selectedPackage.toUpperCase();
enrollmentFee.innerHTML = 28;
monthlyFee.innerHTML = selectedPrice;
annualFee.innerHTML = 0.0;
totalCharge = 28 + parseFloat(selectedPrice) + 0.0
totalDue.innerHTML = totalCharge;







