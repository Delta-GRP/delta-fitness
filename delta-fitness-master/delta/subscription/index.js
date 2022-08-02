// let optionOne = document.getElementsByClassName("option")[0]
// let optionTwo = document.getElementsByClassName("option")[1]
// let optionThree = document.getElementsByClassName("option")[2]

// let optionFour = document.getElementsByClassName("option")[3]
// let optionFive = document.getElementsByClassName("option")[4]
// let optionSix = document.getElementsByClassName("option")[5]

// // optionOne.style.backgroundImage = 'url("assets/solo-training-min.jpg")'
// // optionOne.style.backgroundSize = "cover"
// optionTwo.style.backgroundImage = 'url("assets/heart healthy.jpeg")'
// optionTwo.style.backgroundSize = "cover"
// optionTwo.style.backgroundColor = "black"
// optionTwo.style.color = "white"
// // optionThree.style.backgroundImage = 'url("assets/shot-of-a-sporty-young-woman-exercising-with-a-dumbbell-in-a-gym-picture-id1370779215.jpg")'
// // optionThree.style.backgroundSize = "cover"

// // optionFour.style.backgroundImage = 'url("assets/heart \thealthy.jpeg")'
// // optionFour.style.backgroundSize = "cover"
// //optionFive.style.backgroundImage = 'url("assets/openingPic.jpeg")'
// //optionFive.style.backgroundSize = "cover"
// //optionFive.style.color = "white"
// // optionSix.style.backgroundImage = 'url("assets/photo_2022-05-05_14-39-07.jpg")'
// // optionSix.style.backgroundSize = "cover"

// let trainingBenefitList = ["Free Equipment", "All Day Free Training", "Personal Coach", "24/7 Skilled Support", "Free Restroom"]
// let dietBenefitList = ["Free Protein Shake", "Daily Free Shopping Suggestions", "Personal Dietician", "24/7 Skilled Support", "Free Restroom"]

// let halfs = document.getElementsByClassName("secondHalf")

// let costs = document.getElementsByClassName("cost")
// for (let i = 0; i < 3; i++) {
//     if (i == 0) {
//         costs[i].innerHTML = "$98"
//     } else if (i == 1) {
//         costs[i].innerHTML = "$199"
//     } else if (i == 2) {
//         costs[i].innerHTML = "$295"
//     }
// }

// for (let i = 3; i < 6; i++) {
//     if (i == 3) {
//         costs[i].innerHTML = "$98"
//     } else if (i == 4) {
//         costs[i].innerHTML = "$199"
//     } else if (i == 5) {
//         costs[i].innerHTML = "$295"
//     }
// }

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 5; j++) {
//         let line = document.createElement("div")
//         line.style.display = "flex"
//         line.style.fontFamily = "Arial, Helvetica, sans-serif"
//         line.style.paddingBottom = "5%"
//         line.style.paddingLeft = "10%"
//         halfs[i].appendChild(line)
//         let image = document.createElement("div")
//         image.style.width = "5%"
//         image.style.backgroundSize = "cover"
//         let perk = document.createElement("div")
//         if (i == 0 && j > 2) {
//             image.style.backgroundImage = 'url("assets/My project(1).png")'
//         } else if (i == 0 && j <= 2) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         } else if (i == 1 && j > 3) {
//             image.style.backgroundImage = 'url("assets/My project(1).png")'
//         } else if (i == 1 && j <= 3) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         } else if (i == 2) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         } else if (i == 3 && j > 2) {
//             image.style.backgroundImage = 'url("assets/My project(1).png")'
//         } else if (i == 3 && j <= 2) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         } else if (i == 4 && j > 3) {
//             image.style.backgroundImage = 'url("assets/My project(1).png")'
//         } else if (i == 4 && j <= 3) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         } else if (i == 5) {
//             image.style.backgroundImage = 'url("assets/My project.png")'
//         }


//         if (i < 3) {
//             perk.innerHTML = trainingBenefitList[j]
//         } else {
//             perk.innerHTML = dietBenefitList[j]
//         }

//         perk.style.paddingLeft = "2%"
//         line.appendChild(image)
//         line.appendChild(perk)
//     }
//     let buttonContainer = document.createElement("div")
//     buttonContainer.style.marginTop = "20%"
//     buttonContainer.style.height = "50%"
//     let button = document.createElement("button")
//     button.style.width = "25%"
//     button.style.height = "50px"
//     button.style.backgroundColor = "red"
//     button.style.fontWeight = "bolder"
//     button.style.color = "white"
//     button.style.borderColor = "red"
//     buttonContainer.style.marginLeft = "-43%"
//     button.innerHTML = "JOIN US"
//     buttonContainer.appendChild(button)
//     halfs[i].appendChild(buttonContainer)
// }


let trainingBenefits = {
    "standards": [
        {
            "name": "Free Equipment",
            "isAvailable": true,
        },
        {
            "name": "All Day Free Training",
            "isAvailable": true,
        },
        {
            "name": "Personal Coach",
            "isAvailable": true,
        },
        {
            "name" : "Free Protein Shake",
            "isAvailable" : true
        },
        {
            "name": "24/7 Skilled Support",
            "isAvailable": false,
        },
        {
            "name" : "Daily Free Shopping Suggestions",
            "isAvailable" : false
        },
        {
            "name": "Free restroom",
            "isAvailable": false,
        },
        {
            "name" : "Personal Dietician",
            "isAvailable" : false
        }
    ],
    "premiums": [
        {
            "name": "Free Equipment",
            "isAvailable": true,
        },
        {
            "name": "All Day Free Training",
            "isAvailable": true,
        },
        {
            "name": "Personal Coach",
            "isAvailable": true,
        },
        {
            "name" : "Free Protein Shake",
            "isAvailable" : true
        },
        {
            "name": "24/7 Skilled Support",
            "isAvailable": true,
        },
        {
            "name" : "Daily Free Shopping Suggestions",
            "isAvailable" : true
        },
        {
            "name": "Free restroom",
            "isAvailable": false,
        },
        {
            "name" : "Personal Dietician",
            "isAvailable" : false
        }
    ],
    "experts": [
        {
            "name": "Free Equipment",
            "isAvailable": true,
        },
        {
            "name": "All Day Free Training",
            "isAvailable": true,
        },
        {
            "name": "Personal Coach",
            "isAvailable": true,
        },
        {
            "name" : "Free Protein Shake",
            "isAvailable" : true
        },
        {
            "name": "24/7 Skilled Support",
            "isAvailable": true,
        },
        {
            "name" : "Daily Free Shopping Suggestions",
            "isAvailable" : true
        },
        {
            "name": "Free restroom",
            "isAvailable": true,
        },
        {
            "name" : "Personal Dietician",
            "isAvailable" : true
        }
    ],
}

let trashElement = document.createElement("div")
trashElement.style.display = "none"

let offers1 = document.getElementById('offers1');
if(offers1 == null){offers1 = trashElement}
var offer;
trainingBenefits.standards.forEach(standard => offers1.innerHTML += '<div>' + standard.name +'</div>');

let checkMarks1 = document.getElementById('check-marks1');
if(checkMarks1 == null){checkMarks1 = trashElement}
trainingBenefits.standards.forEach(standard => {
    if(standard.isAvailable == true){
        checkMarks1.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
    }else{
        checkMarks1.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
    }
})


let offers2 = document.getElementById('offers2');
if(offers2 == null){offers2 = trashElement}
var offer;
trainingBenefits.premiums.forEach(premium => offers2.innerHTML += '<div>' + premium.name +'</div>');

let checkMarks2 = document.getElementById('check-marks2');
if(checkMarks2 == null){checkMarks2 = trashElement}
trainingBenefits.premiums.forEach(premium => {
    if(premium.isAvailable == true){
        checkMarks2.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
    }else{
        checkMarks2.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
    }
})

let offers3 = document.getElementById('offers3');
if(offers3 == null){offers3 = trashElement}
var offer;
trainingBenefits.experts.forEach(expert => offers3.innerHTML += '<div>' + expert.name +'</div>');

let checkMarks3 = document.getElementById('check-marks3');
if(checkMarks3 == null){checkMarks3 = trashElement}
trainingBenefits.experts.forEach(expert => {
    if(expert.isAvailable == true){
        checkMarks3.innerHTML += '<div><img src = "./assets/check.png"></img></div>';
    }else{
        checkMarks3.innerHTML += '<div><img src = "./assets/cross.png"></img></div>';
    }
})

export {trainingBenefits}
