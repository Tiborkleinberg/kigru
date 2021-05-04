//smooth scrolling: https://www.youtube.com/watch?v=oUSvlrDTLi4
// reveal while scrolling https://www.youtube.com/watch?v=aoGMFbWJ2aU




//smooth scroll
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2) -1) + b;
    }
    
    requestAnimationFrame(animation)
};



var vorzuege = document.querySelector("#losgehtsbutton");


vorzuege.addEventListener("click", function(){
    smoothScroll("#vorzuege", 1000)
  });





//Pfeil nach oben button

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//burger to x
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const submenu = document.querySelector(".submenu");
const subsubmenu = document.querySelector(".subsubmenu");
const nav2 = document.querySelector(".nav2");


//topdown-navbar
burger.addEventListener("click", () => {
  nav.classList.toggle("change");
  submenu.classList.toggle("change");
});
