

//smooth scroll for ueberuns
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
  }
  
  
    var ueberuns = document.querySelector("#preisebutton");
  
  
  ueberuns.addEventListener("click", function(){
      smoothScroll("#preiseID", 1000)
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
  
  
  //topdown-navbar
  burger.addEventListener("click", () => {
    nav.classList.toggle("change");
    submenu.classList.toggle("change");
  });
  


//FRAGE 1: cross-change, dropdown

let dropdown = document.querySelector('.dc1')
let cross1 = document.querySelector('.gesamtCross1')


cross1.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
    dropdown.classList.add('closed')   
  }
})

//cross1

let crossUp1 = document.querySelector('.cross1')


cross1.addEventListener('click', (e) => {
  if (crossUp1.classList.contains('closed')) {
    crossUp1.classList.remove('closed')
  } else {
    crossUp1.classList.add('closed')   
  }
})

//FRAGE 2: cross-change, dropdown

let dropdown2 = document.querySelector('.dc2')
let cross2 = document.querySelector('.gesamtCross2')



cross2.addEventListener('click', (e) => {
  if (dropdown2.classList.contains('closed')) {
    dropdown2.classList.remove('closed')
  } else {
    dropdown2.classList.add('closed')   
  }
})

//cross2

let crossUp2 = document.querySelector('.cross2')


cross2.addEventListener('click', (e) => {
  if (crossUp2.classList.contains('closed')) {
    crossUp2.classList.remove('closed')
  } else {
    crossUp2.classList.add('closed')   
  }
})

//FRAGE 3: cross-change, dropdown

let dropdown3 = document.querySelector('.dc3')
let cross3 = document.querySelector('.gesamtCross3')



cross3.addEventListener('click', (e) => {
  if (dropdown3.classList.contains('closed')) {
    dropdown3.classList.remove('closed')
  } else {
    dropdown3.classList.add('closed')   
  }
})

//cross3

let crossUp3 = document.querySelector('.cross3')


cross3.addEventListener('click', (e) => {
  if (crossUp3.classList.contains('closed')) {
    crossUp3.classList.remove('closed')
  } else {
    crossUp3.classList.add('closed')   
  }
})


//FRAGE 4: cross-change, dropdown

let dropdown4 = document.querySelector('.dc4')
let cross4 = document.querySelector('.gesamtCross4')



cross4.addEventListener('click', (e) => {
  if (dropdown4.classList.contains('closed')) {
    dropdown4.classList.remove('closed')
  } else {
    dropdown4.classList.add('closed')   
  }
})

//cross4

let crossUp4 = document.querySelector('.cross4')


cross4.addEventListener('click', (e) => {
  if (crossUp4.classList.contains('closed')) {
    crossUp4.classList.remove('closed')
  } else {
    crossUp4.classList.add('closed')   
  }
})


//FRAGE 5: cross-change, dropdown

let dropdown5 = document.querySelector('.dc5')
let cross5 = document.querySelector('.gesamtCross5')



cross5.addEventListener('click', (e) => {
  if (dropdown5.classList.contains('closed')) {
    dropdown5.classList.remove('closed')
  } else {
    dropdown5.classList.add('closed')   
  }
})

//cross5

let crossUp5 = document.querySelector('.cross5')


cross5.addEventListener('click', (e) => {
  if (crossUp5.classList.contains('closed')) {
    crossUp5.classList.remove('closed')
  } else {
    crossUp5.classList.add('closed')   
  }
})



//FRAGE 6: cross-change, dropdown

let dropdown6 = document.querySelector('.dc6')
let cross6 = document.querySelector('.gesamtCross6')



cross6.addEventListener('click', (e) => {
  if (dropdown6.classList.contains('closed')) {
    dropdown6.classList.remove('closed')
  } else {
    dropdown6.classList.add('closed')   
  }
})

//cross6

let crossUp6 = document.querySelector('.cross6')


cross6.addEventListener('click', (e) => {
  if (crossUp6.classList.contains('closed')) {
    crossUp6.classList.remove('closed')
  } else {
    crossUp6.classList.add('closed')   
  }
})


//FRAGE 7: cross-change, dropdown

let dropdown7 = document.querySelector('.dc7')
let cross7 = document.querySelector('.gesamtCross7')



cross7.addEventListener('click', (e) => {
  if (dropdown7.classList.contains('closed')) {
    dropdown7.classList.remove('closed')
  } else {
    dropdown7.classList.add('closed')   
  }
})

//cross7

let crossUp7 = document.querySelector('.cross7')


cross7.addEventListener('click', (e) => {
  if (crossUp7.classList.contains('closed')) {
    crossUp7.classList.remove('closed')
  } else {
    crossUp7.classList.add('closed')   
  }
})


//FRAGE 8: cross-change, dropdown

let dropdown8 = document.querySelector('.dc8')
let cross8 = document.querySelector('.gesamtCross8')



cross8.addEventListener('click', (e) => {
  if (dropdown8.classList.contains('closed')) {
    dropdown8.classList.remove('closed')
  } else {
    dropdown8.classList.add('closed')   
  }
})

//cross8

let crossUp8 = document.querySelector('.cross8')


cross8.addEventListener('click', (e) => {
  if (crossUp8.classList.contains('closed')) {
    crossUp8.classList.remove('closed')
  } else {
    crossUp8.classList.add('closed')   
  }
})


//FRAGE 9: cross-change, dropdown

let dropdown9 = document.querySelector('.dc9')
let cross9 = document.querySelector('.gesamtCross9')



cross9.addEventListener('click', (e) => {
  if (dropdown9.classList.contains('closed')) {
    dropdown9.classList.remove('closed')
  } else {
    dropdown9.classList.add('closed')   
  }
})

//cross9

let crossUp9 = document.querySelector('.cross9')


cross9.addEventListener('click', (e) => {
  if (crossUp9.classList.contains('closed')) {
    crossUp9.classList.remove('closed')
  } else {
    crossUp9.classList.add('closed')   
  }
})

//FRAGE 10: cross-change, dropdown

let dropdown10 = document.querySelector('.dc10')
let cross10 = document.querySelector('.gesamtCross10')


cross10.addEventListener('click', (e) => {
  if (dropdown10.classList.contains('closed')) {
    dropdown10.classList.remove('closed')
  } else {
    dropdown10.classList.add('closed')   
  }
})

//cross10

let crossUp10 = document.querySelector('.cross10')


cross10.addEventListener('click', (e) => {
  if (crossUp10.classList.contains('closed')) {
    crossUp10.classList.remove('closed')
  } else {
    crossUp10.classList.add('closed')   
  }
})

//FRAGE 11: cross-change, dropdown

let dropdown11 = document.querySelector('.dc11')
let cross11 = document.querySelector('.gesamtCross11')



cross11.addEventListener('click', (e) => {
  if (dropdown11.classList.contains('closed')) {
    dropdown11.classList.remove('closed')
  } else {
    dropdown11.classList.add('closed')   
  }
})

//cross11

let crossUp11 = document.querySelector('.cross11')


cross11.addEventListener('click', (e) => {
  if (crossUp11.classList.contains('closed')) {
    crossUp11.classList.remove('closed')
  } else {
    crossUp11.classList.add('closed')   
  }
})

//FRAGE 12: cross-change, dropdown

let dropdown12 = document.querySelector('.dc12')
let cross12 = document.querySelector('.gesamtCross12')



cross12.addEventListener('click', (e) => {
  if (dropdown12.classList.contains('closed')) {
    dropdown12.classList.remove('closed')
  } else {
    dropdown12.classList.add('closed')   
  }
})

//cross12

let crossUp12 = document.querySelector('.cross12')


cross12.addEventListener('click', (e) => {
  if (crossUp12.classList.contains('closed')) {
    crossUp12.classList.remove('closed')
  } else {
    crossUp12.classList.add('closed')   
  }
})




