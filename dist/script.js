const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const menuLi = document.querySelectorAll('.header__menu .menu__list');
const productsSection = document.querySelector('#products');
const scrollTopButton = document.querySelector('.scrollTopButton');


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
        nav.classList.remove('active');
        document.body.style.overflow = 'initial';
        scrollTopButton.style.display = 'initial';
    });
})

// Making desktop/tablet fixed menu after scrolling
window.addEventListener('scroll', animaScroll);

function animaScroll() {
    const productsTop = productsSection.getBoundingClientRect();
    const navFixed = nav;
    if (productsTop.top < -50) {
        navFixed.classList.add('navFixed');
    } else {
        navFixed.classList.remove('navFixed');
    }
}