const sessionUrl = 'http://localhost/delta-fitness/shared/authentication/api/session.php';
const request = new XMLHttpRequest();

function getSession(){
    
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

    request.open('get', sessionUrl, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

function handleResponse(responseObject){

    const signIn= document.getElementById('sign-in');
    const userProfile= document.getElementById('user-profile');

    if(responseObject.status){
        responseObject.messages.forEach(message =>{
            console.log(message);
          })
        signIn.style.display = 'none';
        userProfile.style.display = 'block';

    }else{
        responseObject.messages.forEach(message=>{
          console.log(message);
        })
        signIn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

 getSession();

function slideInAnimation(start, end) {
    var fadeInContainer = document.querySelector("."+start);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(end, entry.isIntersecting);

            if (entry.isIntersecting) {
                console.log('intersecting...');
                 observer.unobserve(entry.target);
            };

        })
    });

    observer.observe(fadeInContainer);
    // fadeInContainers.forEach(element => {
    //     observer.observe(element);
    // });


}

slideInAnimation("animation-box", "show-box");
slideInAnimation("animation-box-personal", "show-box-personal");

// slide show 

let slideIndex = 0;

showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName('dot');
    
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex -1].style.display = "block";
    setTimeout(showSlides, 5000);

}


// $.ajax(
//     {
//         type : 'GET',
//         url : sessionUrl,
//         headers: {
//           'Content-Type': 'application/json', 
//         },
//         success: function(responseObj) {
//           if(responseObj.status){
//             console.log('authorized');
//           }else{
//             console.log('unauthorized');
//           }
//         },
//         error: function() {
//           console.error('There was some error performing the AJAX call!');
//         }
//      }
//   );


