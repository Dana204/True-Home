const hamburger = document.querySelector(".header__bottom-toggler");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const searchTabs = document.querySelectorAll(".hero__search-labels p");


hamburger.addEventListener("click", mobileMenu);

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
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

