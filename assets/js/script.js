/*******************************************/
/*                                         */
/*                VARIABLES                */
/*                                         */
/*******************************************/

let windowHeight = window.innerHeight;


/*******************************************/
/*                                         */
/*                FUNCTIONS                */
/*                                         */
/*******************************************/

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
        starContainer.appendChild(star);
    }
}

/*******************************************/
/*                                         */
/*                 EVENTS                  */
/*                                         */
/*******************************************/

window.addEventListener('resize', resizeScreenHeight);

window.addEventListener('load', function(){
    resizeScreenHeight();
    createStars();
});