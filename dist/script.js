const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const menuLi = document.querySelectorAll('.header__menu .menu__list');
const productsSection = document.querySelector('#products');
const scrollTopButton = document.querySelector('.scrollTopButton');
var prevScrollpos = window.pageYOffset;


// Activating mobile hamburger menu
hamburger.addEventListener('click', hamburgerClickable);

function hamburgerClickable() {
    var x = window.matchMedia("(max-width: 767px)")
    nav.classList.toggle('active');
    hamburger.classList.toggle('active')

    // Desabling scrolling and scrollTopButton when hamburger is active and removing hamburger menu when the screen is > than 767px;
    function myFunction(x) {
        if (x.matches && hamburger.classList.contains('active')) { // If media query matches
            nav.classList.add('active');
            document.body.style.overflow = 'hidden';
            scrollTopButton.style.display = 'none'
        } else {
            document.body.style.overflow = 'initial';
            scrollTopButton.style.display = 'initial';
            nav.classList.remove('active');
        }
      }
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
}


// Desabling mobile hamburger when clicking on menu lists/items
menuLi.forEach((e) => {
    e.addEventListener('click', () => {
        document.body.style.overflow = 'initial';
        scrollTopButton.style.display = 'initial';
        nav.classList.remove('active');
    });
})

// Making desktop/tablet fixed menu after scrolling

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.style.top = "0";
      nav.classList.add('navFixed')
    } else {
        nav.style.top = "-60px";
        nav.classList.remove('navFixed')
    }
    prevScrollpos = currentScrollPos;
}