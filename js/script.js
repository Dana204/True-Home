const navbar = document.querySelector(".header__bottom");
const hamburger = document.querySelector(".header__bottom-toggler");
const navMenu = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const searchIcon = document.querySelector(".search-icon");
const headerForm = document.querySelector(".header__bottom form");
const navLinks = document.querySelectorAll("nav a");
const searchTabs = document.querySelectorAll(".hero__search-labels p");
const featuredTabs = document.querySelectorAll(".featured__labels li");
const reviewThumbnail = document.querySelectorAll(".reviews__content-thumbnail div");


hamburger.addEventListener("click", mobileMenu);
hamburger.addEventListener("click", removeHeaderForm);
overlay.addEventListener("click", closeMenu);
searchIcon.addEventListener("click", displayHeaderForm)


var sticky = navbar.offsetTop;
console.log(sticky)
// var sticky = 200;

function scrollNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {
    removeHeaderForm()
    scrollNav()
};




function displayHeaderForm() {
    headerForm.classList.toggle("active");
}

function removeHeaderForm() {
    headerForm.classList.remove("active");
}

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
}

// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].onclick = function() {
//         let j = 0;
//         while (j < navLinks.length) {
//             navLinks[j++].className = 'list';
//         }
//         navLinks[i].className = 'list active';
//     } 
// }

function makeActive(tabs) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            // Remove active tabs
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
                // tabContent[j].classList.remove('active');
            }
    
            tabs[i].classList.add('active');
            // tabContent[i].classList.add('active');
        })
    }
}

makeActive(navLinks);
makeActive(searchTabs);
makeActive(featuredTabs);
makeActive(reviewThumbnail);

var likes = document.querySelectorAll(".like");

likes.forEach(like => like.addEventListener('click', () => {
    if (like.src.match("./img/heart-fill.png")) {
        like.src = './img/heart-coloured.png';
    } else {
        like.src = './img/heart-fill.png';
    }
}))

// function imgChanger(imagesList, source1, source2) {
//     imagesList.forEach(img => img.addEventListener('click', () => {
//         if (img.src.match(source1)) {
//             img.src = `${source2}`;
//         } else {
//             img.src = `${source1}`;
//         }
//     }))
// }
// imgChanger()

// imgChanger(like);
// src.replace('bw_','clr_')

