
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