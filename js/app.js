/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */



/**
 * Define Global Variables
 *
 */

var docFragment = document.createDocumentFragment();
var sections = document.querySelectorAll("section");
var navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 */




/**
 *
 * Begin Main Functions
 *
 */



// function Enent lsiten
function lsitenEnentClick(e){
    getActiveSection(sections,this.textContent);
}
// build the nav
function createListNav(section) {
    let text =  section.getAttribute("data-nav");
    let newtext = document.createTextNode(text);
    let element = document.createElement('li');
    element.addEventListener('click',lsitenEnentClick);
    element.appendChild(newtext);
    docFragment.appendChild(element);
}
sections.forEach(createListNav);
navbarList.appendChild(docFragment);


// function scroll to section when link clicked

function getActiveSection(sections,text) {
    sections.forEach(function (sec) {
        let textSec =   sec.getAttribute("data-nav");
        if(textSec === text){
            if(sec.className !== 'active'){
                let ele =  document.getElementsByClassName('active');
                ele[0].classList.remove('active');
                sec.classList.add('active');
                sec.scrollIntoView({'behavior':'smooth'});
                return'';
            }
        }
    });
}

//function event when scroll add class active

document.addEventListener('scroll',function (){
    let scrollPosition = document.body.scrollTop;
    sections.forEach(function (sec) {
        if(scrollPosition >= sec.offsetTop && scrollPosition < sec.offsetHeight + sec.offsetTop){
            if(sec.className !== 'active'){
                let ele =  document.getElementsByClassName('active');
                ele[0].classList.remove('active');
                sec.classList.add('active');
                sec.scrollIntoView({'behavior':'smooth'});
                return'';
            }
        }
    });

});


