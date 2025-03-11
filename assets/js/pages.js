document.addEventListener("DOMContentLoaded", event => {
    /*******************************************/
    /*                                         */
    /*                VARIABLES                */
    /*                                         */
    /*******************************************/

    const carousel = document.getElementById("carousel-pages");
    const carouselIndicators = document.querySelectorAll(".carousel-indicators li");
    const bookmarkToggle = document.querySelector(".navbar-toggler");


    /*******************************************/
    /*                                         */
    /*                FUNCTIONS                */
    /*                                         */

    /*******************************************/

    function updateBookmark(index) {
        for (let i = 0; i < carouselIndicators.length; i++) {
            carouselIndicators[i].classList.remove("active");
        }
        carouselIndicators[index].classList.add("active");

        if(window.innerWidth < 992){
            bookmarkToggle.click();
        }
    }


    /*******************************************/
    /*                                         */
    /*                 EVENTS                  */
    /*                                         */
    /*******************************************/


    for (let i = 0; i < carouselIndicators.length; i++) {
        carouselIndicators[i].addEventListener("click", event => {
            updateBookmark(i);
        })
    }

    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeIndex = event.to;
        for (let i = 0; i < carouselIndicators.length; i++) {
            carouselIndicators[i].classList.remove("active");
        }
        carouselIndicators[activeIndex].classList.add("active");
    });
});
