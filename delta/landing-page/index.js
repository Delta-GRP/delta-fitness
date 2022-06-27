
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
