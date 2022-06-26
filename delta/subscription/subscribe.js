let loc = document.URL;
if(loc.search("subscribe") != -1){
    //alert(document.URL)
   // document.getElementById("underLine").style.textDecoration = "underline"
   // document.getElementById("underLine").style.textDecorationColor = "red"
}

let subBodtrain = document.getElementById("train");
let subBodeat = document.getElementById("eat");

let trainBod = document.getElementById("parentTrain");
let eatBod = document.getElementById("parentDiet");

function switchTopicTrain(){
   // subBodtrain.style.textDecoration = "underline";
    subBodtrain.style.color = "white";
    subBodeat.style.color = "grey";
    eatBod.style.display = "none";
    trainBod.style.display = "block";
}

function switchTopicEat(){
  // subBodeat.style.textDecoration = "underline";
    subBodeat.style.color = "white";
    subBodtrain.style.color = "grey";
    eatBod.style.display = "block";
    trainBod.style.display = "none";
}