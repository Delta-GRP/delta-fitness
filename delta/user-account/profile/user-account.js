import {trainingBenefitList} from "../subscription/offers.js"
//This just imports the object from the subscription folder
//the import above only works with http. So if you dont use a server(local or not) to open it, it won't work

let trashElement = document.createElement("div")
trashElement.style.display = "none"
//The above is here because an element in the imported object is assigned to a variable that ia an html object in the other page. 
//I created this dummy element so that it can point to it.
let personalInfo = {
    "firstName" : "Tim",
    "lastName" : "Cog",
    "email" : "timcog@gmail.com",
    "phone" : "0123456789"
}


let trainerInfo = {
    "trainerPicture" : "assets/headshot-portrait-black-man-posing-studio-smiling-african-american-millennial-tshirt-isolated-grey-background-happy-male-153882352.jpg",
    "trainerName" : "Kofi Mensah",
    "trainerAge" : "25",
    "trainerGender" : "MALE"
}


let offerInfo = {
    "offerName" : "standards",
    "offerCost" : "$98",
    "offerPerks" : trainingBenefitList.standards,
    "offerStarts" : [2022,7,1],
    "offerEnds" : [2022,7,31]
}

let trainerPicture = document.getElementsByClassName("trainer-image")[0];
trainerPicture.setAttribute("src",trainerInfo.trainerPicture);

let trainerName = document.getElementsByClassName("trainer-name")[0]
let trainerAge = document.getElementsByClassName("trainer-age")[0]
let trainerGender = document.getElementsByClassName("trainer-gender")[0]


trainerName.innerHTML += trainerInfo.trainerName;
//console.log(trainerName.innerHTML)
trainerAge.innerHTML += trainerInfo.trainerAge;
//console.log(trainerAge.innerHTML)
trainerGender.innerHTML += trainerInfo.trainerGender;
//console.log(trainerGender.innerHTML)

//console.log(trainingBenefits.standards[0].name)

//console.log(trainingBenefits.standards)

let tierName;
if(offerInfo.offerName == "standards"){
    tierName = trainingBenefitList[0]
}else if(offerInfo.offerName == "premiums"){
    tierName = trainingBenefitList[1]
}else if(offerInfo.offerName == "experts"){
    tierName = trainingBenefitList[2]
}


let offerName = document.getElementsByClassName("offer-name")[0]
offerName.innerHTML = offerInfo.offerName + " PACKAGE " + "@ " + tierName.price + " per Month";
let offerPerks = document.getElementsByClassName("offer-perks")[0]
for(let i = 0; i < tierName.offers.length; i++){
    if(tierName.offers[i].isAvailable == true){
        //This automatically adjusts to how many of the perks are avaailable.
        //They just have to be changed in the subscription folder script file and the change will reflect here
        let newLine = document.createElement("div");
        newLine.setAttribute("class", "available-perks")
        newLine.innerHTML = tierName.offers[i].name
        offerPerks.appendChild(newLine)
    }
}

const started = new Date(offerInfo.offerStarts[0],offerInfo.offerStarts[1],offerInfo.offerStarts[2])
const ends = new Date(offerInfo.offerEnds[0],offerInfo.offerEnds[1],offerInfo.offerEnds[2])
//const now = new Date()

let startDate = document.getElementsByClassName("offer-start")[0]
let endDate = document.getElementsByClassName("offer-end")[0]

startDate.innerHTML += formatDate(started)
endDate.innerHTML += formatDate(ends)

// let progress = document.getElementsByTagName("progress")[0]

function refreshDate(){
    const now = new Date()
    const progressLimit = (now - started)/(1000*60*60*24)
    let progress = document.getElementsByTagName("progress")[0]
    progress.setAttribute("value", progressLimit)
}



let personalData = document.getElementsByClassName("info-space")
personalData[0].innerHTML = personalInfo.firstName
personalData[1].innerHTML = personalInfo.lastName
personalData[2].innerHTML = personalInfo.email
personalData[3].innerHTML = personalInfo.phone



window.setTimeout(refreshDate(),1000*60*60*24)

function formatDate(date){
    let day, month
    if(date.getDate().toString().length == 1){
        day = "0" + date.getDate().toString()
    }else{
        day = date.getDate().toString()
    }

    if((date.getMonth()+1).toString().length == 1){
        month = "0" + (date.getMonth()+1).toString()
    }else{
        month = (date.getMonth()+1).toString()
    }
    return[
        day,
        month,
        date.getFullYear(),
    ].join(" / ")
}

//setTimeInterval