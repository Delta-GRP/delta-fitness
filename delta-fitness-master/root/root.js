const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".tab .tab-contents li a" ).
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});

var scrollBtn = document.querySelector('scroll-btn');

var rootElement = document.documentElement;
window.onscroll = function () { showScrollBtn() }

function showScrollBtn() {
    var scrollHeight = 300;
   // console.log(scroll);
    if (document.body.scrollTop > scrollHeight ||rootElement.scrollTop > scrollHeight) {
        scrollBtn.style.display = 'block';
        console.log(rootElement.scrollTop);
    } else {
        scrollBtn.style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    rootElement.scrollTop = 0;
}

function openSignInModal() {
    document.getElementById("signin-modal").style.display = "block";
    document.getElementById("signin-bg").style.display = "block";
}

function closeSignInModal() {
    document.getElementById("signin-modal").style.display = "none";
    document.getElementById("signin-bg").style.display = "none";
}

const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");

const formBox = document.querySelector(".formBox");
const closeBtn = document.querySelector("#closeBtn");

signupBtn.onclick = function () {
    formBox.classList.add("active");

    closeBtn.classList.add("btnColor");
    // todo implement color change based on current 
    // state of the form;
}

signinBtn.onclick = function () {
    formBox.classList.remove("active");
    closeBtn.classList.remove("btnColor");
}