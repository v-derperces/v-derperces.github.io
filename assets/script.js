/*******************************************/
/*                                         */
/*                VARIABLES                */
/*                                         */
/*******************************************/const bookContainer = document.getElementById("book-container");
const book = document.querySelector(".book");
const mainSection = document.getElementById("section-main");

const pages = document.querySelectorAll(".page");
let currentIndex = 0;  // Current page


/*******************************************/
/*                                         */
/*                FUNCTIONS                */
/*                                         */
/*******************************************/

function toggleHomePage(){
    updatePages();
    mainSection.classList.toggle("hidden");
    mainSection.classList.toggle("fade-in");
    
    bookContainer.classList.toggle("hidden");
    bookContainer.classList.toggle("fade-in");
}

function updatePages() {
    pages.forEach(section => section.classList.add("hidden"));
    pages[currentIndex].classList.remove("hidden");
}

function showNextSection() {
    if (currentIndex < pages.length - 1) {
        currentIndex++;
        updatePages();
    }
}

function showPreviousSection() {
    if (currentIndex > 0) {
        currentIndex--;
        updatePages();
    }
}

/*******************************************/
/*                                         */
/*                 EVENTS                  */
/*                                         */
/*******************************************/
document.querySelector("header h1").addEventListener("click", toggleHomePage);
book.addEventListener("click", toggleHomePage);
document.getElementById("previous-btn").addEventListener("click", showPreviousSection);
document.getElementById("next-btn").addEventListener("click", showNextSection);