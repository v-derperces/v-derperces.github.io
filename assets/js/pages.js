document.addEventListener("DOMContentLoaded", event => {
    /*******************************************/
    /*                                         */
    /*                VARIABLES                */
    /*                                         */
    /*******************************************/
    
    const carouselPages = document.querySelectorAll(".carousel-indicators li");
    const bookmarkToggle = document.querySelector(".navbar-toggler");
   
    
    /*******************************************/
    /*                                         */
    /*                FUNCTIONS                */
    /*                                         */
    /*******************************************/
    
    function updateBookmark(index){
        for(let i=0; i< carouselPages.length; i++){
            carouselPages[i].classList.remove("active");
        }
        carouselPages[index].classList.add("active");
        bookmarkToggle.click();
    }


    /*******************************************/
    /*                                         */
    /*                 EVENTS                  */
    /*                                         */
    /*******************************************/
    
    
    for(let i=0; i< carouselPages.length; i++){
        carouselPages[i].addEventListener("click", event =>{
            updateBookmark(i);
        })
    }
    
});
