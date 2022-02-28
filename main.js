//swiper automization
const swiper = new Swiper();
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 3,
    autoplay : {
        delay : 3000
    }
})


//using masonary lib
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}