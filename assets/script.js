/*******************************************/
/*                                         */
/*                VARIABLES                */
/*                                         */
/*******************************************/

const bookContainer = document.getElementById("book-container");
const mainSection = document.getElementById("section-main");
const nav = document.getElementsByTagName("nav")[0];

const book = document.querySelector(".book");
const bookmarks = document.querySelectorAll(".bookmark");
const pages = document.querySelectorAll(".page");
let currentIndex = 0;
let windowHeight = window.innerHeight;


/*******************************************/
/*                                         */
/*                FUNCTIONS                */
/*                                         */
/*******************************************/

function displayHomePage(){
    document.getElementsByTagName("main")[0].classList.add("hidden");
    mainSection.classList.add("hidden");
    bookContainer.classList.remove("hidden");
    bookContainer.classList.add("fade-in");
    nav.classList.add("hidden");
}

function displayBookmarks(){
    document.getElementsByTagName("main")[0].classList.add("hidden");
    document.getElementsByTagName("footer")[0].classList.add("hidden");
    bookContainer.classList.add("hidden");
    mainSection.classList.remove("hidden");
    mainSection.classList.add("fade-in");
    nav.classList.remove("hidden");
    document.getElementById("bookmark").classList.add("hidden");
}

function updatePages() {
    pages.forEach(page => page.classList.add("hidden"));
    pages[currentIndex].classList.remove("hidden");
}

function displayPages(){
    updatePages();
    nav.classList.add("hidden");
    document.getElementsByTagName("footer")[0].classList.remove("hidden");
    document.getElementsByTagName("main")[0].classList.remove("hidden");
    document.getElementById("bookmark").classList.remove("hidden");
}

function showNextPage() {
    if (currentIndex < pages.length - 1) {
        currentIndex++;
        updatePages();
    }
}

function showPreviousPage() {
    if (currentIndex > 0) {
        currentIndex--;
        updatePages();
    }
}

function resizeScreenHeight() {
    const screenHeight = window.innerHeight;
    document.body.style.height = `${screenHeight}px`;
}

function createStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 20;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`; 
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; 
        star.style.animationDelay = `${Math.random() * 5}s`; 
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        starContainer.appendChild(star);
    }
}

/*******************************************/
/*                                         */
/*                 EVENTS                  */
/*                                         */
/*******************************************/

book.addEventListener("click", displayBookmarks);
document.querySelector("header h1").addEventListener("click", displayHomePage);
document.getElementById("previous-btn").addEventListener("click", showPreviousPage);
document.getElementById("next-btn").addEventListener("click", showNextPage);
document.getElementById("bookmark").addEventListener("click", function(){
    if(nav.classList.contains("hidden")){
        displayBookmarks();
    }else{
        displayPages();
    }
});
bookmarks.forEach((bookmark, index) => {
    bookmark.addEventListener("click", function(){
        currentIndex = index;
        displayPages();
    })
});

window.addEventListener('resize', resizeScreenHeight);

window.addEventListener('load', function(){
    resizeScreenHeight;
    displayHomePage;
    createStars();
});