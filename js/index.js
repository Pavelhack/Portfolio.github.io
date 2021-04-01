/*********************************** Header *******************************************/
let lineX, lineY, divs, elem, arrayBlock = [];

function element() {
  lineY = document.documentElement.clientHeight / 100 * 15; // округлить до целого числа
  lineX = document.documentElement.clientWidth / 2;
  return elem = document.elementFromPoint(lineX, lineY);
}


let downHeader = document.getElementsByClassName("menu__hide");
let block = document.getElementById ("Portfolio");
window.onload = function getArrayPoint() {
  [].forEach.call(block.children, (elem) => {
    divs = elem.getBoundingClientRect()
    arrayBlock.push({
      name: elem,
      top: Math.round((divs.top) / 100) * 100
    });
  })
};

document.addEventListener("scroll", () => {
  element();
  let pointScroll = Math.round((pageYOffset + lineY)/100)*100;
  switch (pointScroll) {
    case 200:
      return downHeader[0].classList.add("menu__hide_active")

    case 100:
      return (
              downHeader[0].classList.remove("menu__hide_active"),
               bool = true
               )
  }
})

// *** start move background code ***//
const MAIN = document.getElementsByClassName("main")[0];
const CODE = document.getElementsByClassName("code")[0];

MAIN.addEventListener("mouseover", () =>{
    CODE.classList.remove("code_background_back");
    CODE.classList.add("code_background_go")
})

MAIN.addEventListener("mouseout", () =>{
    CODE.classList.remove("code_background_go");
    CODE.classList.add("code_background_back")
})

// *** change uncolor icons on color *** //
const SKILL = document.getElementsByClassName("skill_icon");
const SHADOW = document.getElementsByClassName("shadow");
const WEBSITE = document.getElementsByClassName("blockimg");
const SKILL_BLOCK = document.getElementsByClassName("skills_block")[0]
const STRING = /_black/gi;
const PNG = /.png/gi;
const JPG = /.jpg/gi;
let bool = true;

function boolean(){
  if(bool){
    bool = false
    blink()
  }
}

function blink(){
let i = 0;
let previousIcon;
let previousShadow;

const TIMER = setInterval(()=>{
    if(previousIcon !== undefined){
      previousIcon.src = previousIcon.src.replace(PNG,"_black.png");
      previousShadow.style = "opacity: 0.5";
    }
    SKILL[i].src = SKILL[i].src.replace(STRING,"");
    SHADOW[i].style = "opacity: 1"
    previousIcon = SKILL[i]
    previousShadow = SHADOW[i]
    i++
    if(i===SKILL.length) {
      i = 0 
    }
  },70)

  setTimeout(() => {
      clearInterval(TIMER);
      previousIcon.src = previousIcon.src.replace(PNG,"_black.png");
      previousShadow.style = "opacity: 0.5";
    }, 2500);
}

document.addEventListener("scroll", () => {
  element();
  let point = Math.round((pageYOffset + lineY)/10);
  console.log(point)
  switch (point) {
    case 64:
      return boolean()
  }
})


for(i = 0; i<= SKILL.length-1; i++){
    SKILL[i].addEventListener("mouseover", (event) =>{
        event.target.src = event.target.src.replace(STRING,"");
        event.target.nextSibling.nextSibling.style = "opacity: 1"
    });
    SKILL[i].addEventListener("mouseout", (event) =>{
        event.target.src = event.target.src.replace(PNG,"_black.png");
        event.target.nextSibling.nextSibling.style = "opacity: 0.5"
    });
}

// *** change uncolor image websites to color *** //
for(i = 0; i<= WEBSITE.length-1; i++){
    WEBSITE[i].addEventListener("mouseover",(event) =>{
        event.target.style.backgroundImage = getComputedStyle(event.target).backgroundImage.replace(STRING,"") } )
    };

// *** move to links for sites *** //
var linkNav = document.querySelectorAll('[href^="#"]');
V = 0.5;  // скорость
for (var i = 0; i < linkNav.length; i++) {
  if(i <= 4){linkNav[i].addEventListener("click",() => document.getElementsByClassName("sail_menu_active")[0].classList.remove("sail_menu_active") )}
  linkNav[i].onclick = function(){
    document.body.classList.remove("overflow_hidden");
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}