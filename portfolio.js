const millionaireDiv = document.querySelector(".one");
const millionaireHeading = document.querySelector(".hOne");

function changeToBlue() {
    millionaireHeading.classList.add("blue-hover")
}
function changeBack() {
    millionaireHeading.classList.remove("blue-hover")
}

millionaireDiv.addEventListener("mouseenter", changeToBlue);
millionaireDiv.addEventListener("mouseleave", changeBack);
//                                                               color change one

const millionaireDivTwo = document.querySelector(".two");
const millionaireHeadingTwo = document.querySelector(".hTwo");

function changeToBlueTwo() {
    millionaireHeadingTwo.classList.add("blue-hover")
}
function changeBackTwo() {
    millionaireHeadingTwo.classList.remove("blue-hover")
}

millionaireDivTwo.addEventListener("mouseenter", changeToBlueTwo);
millionaireDivTwo.addEventListener("mouseleave", changeBackTwo);
//                                                               color change two

const millionaireDivThree = document.querySelector(".three");
const millionaireHeadingThree = document.querySelector(".hThree");

function changeToBlueThree() {
    millionaireHeadingThree.classList.add("blue-hover")
}
function changeBackThree() {
    millionaireHeadingThree.classList.remove("blue-hover")
}

millionaireDivThree.addEventListener("mouseenter", changeToBlueThree);
millionaireDivThree.addEventListener("mouseleave", changeBackThree);
//                                                               color change three

const millionaireDivFour = document.querySelector(".four");
const millionaireHeadingFour = document.querySelector(".hFour");

function changeToBlueFour() {
    millionaireHeadingFour.classList.add("blue-hover")
}
function changeBackFour() {
    millionaireHeadingFour.classList.remove("blue-hover")
}

millionaireDivFour.addEventListener("mouseenter", changeToBlueFour);
millionaireDivFour.addEventListener("mouseleave", changeBackFour);
//                                                               color change three


const millionaireDivFive = document.querySelector(".five");
const millionaireHeadingFive = document.querySelector(".hFive");

function changeToBlueFive() {
    millionaireHeadingFive.classList.add("blue-hover")
}
function changeBackFive() {
    millionaireHeadingFive.classList.remove("blue-hover")
}

millionaireDivFive.addEventListener("mouseenter", changeToBlueFive);
millionaireDivFive.addEventListener("mouseleave", changeBackFive);
//                                                               color change three


const collapsableDiv = document.querySelector(".listed-nav");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");


function pushHamburger() {

    if (window.innerWidth < 1024) {
        // hamBurger.classList.remove("hidden");
        collapsableDiv.classList.add("remove-icon");
        closeIcon.classList.add("remove-icon");
        // otherButtons.classList.remove("vertical")

    } else {
        hamburgerIcon.classList.add("remove-icon");
        closeIcon.classList.add("remove-icon");
    }
}

function hamburgerClick() {
    hamburgerIcon.classList.add("remove-icon");
    collapsableDiv.classList.remove("remove-icon");
    closeIcon.classList.remove("remove-icon");

}

function closeClick() {
    hamburgerIcon.classList.remove("remove-icon");
    collapsableDiv.classList.add("remove-icon");
    closeIcon.classList.add("remove-icon");
}


window.addEventListener("load", pushHamburger)
window.addEventListener("resize", pushHamburger);
hamburgerIcon.addEventListener("click", hamburgerClick)
closeIcon.addEventListener("click", closeClick)