import {trainingBenefitList} from '../offers.js';

let currentPageUrl = window.location.href;

var url = new URL(currentPageUrl);
var offerId = url.searchParams.get("id");
console.log(offerId);

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

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


function getOffer(){
    const offerTitle = document.getElementById('offer-title');
    const price = document.getElementById('price');
    const offers = document.getElementById('offers');
    var offerL = trainingBenefitList.filter(benefit => benefit.id == offerId);
    for(let i = 0; i < offerL.length; i++){
        price.innerHTML = '$' + offerL[i].price;
       // console.log(offerL[i].title);
        offerTitle.innerHTML = offerL[i].title;
        offerL[i].offers.forEach(offer => {
            if(offer.isAvailable){
                offers.innerHTML += `<div> ${offer.name} </div>`;
            }
        })
        
    }
}

getOffer();



