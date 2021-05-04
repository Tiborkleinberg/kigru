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


//smooth scroll for tagesablauf

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
  
  
    var ueberuns = document.querySelector("#tagesablaufbutton");
  
  
  ueberuns.addEventListener("click", function(){
      smoothScroll("#tagesablauf", 1000)
    });
  


    

//burger to x
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const submenu = document.querySelector(".submenu");
const subsubmenu = document.querySelector(".subsubmenu");


//topdown-navbar
burger.addEventListener("click", () => {
  nav.classList.toggle("change");
  submenu.classList.toggle("change");
});
