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

// build the nav

// function Enent lsiten
function lsitenEnentClick(e){
    getActiveSection(sections,this.textContent);
}

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


// function scroll to section on link click

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

//when scroll

document.addEventListener('scroll',function (){
    let rect = document.body.getBoundingClientRect();
    sections.forEach(function (sec){

        if( sec.offsetTop === rect.top.toFixed()){
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


