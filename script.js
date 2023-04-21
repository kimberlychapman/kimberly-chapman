function showMotor(){
    document.getElementById('motor').style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
    document.getElementById('motor').style.color="white";
}
function hideMotor(){
    document.getElementById('motor').style.textShadow = "none";
    document.getElementById('motor').style.color="black";
}

function showAccount(){
    document.getElementById('account').style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
    document.getElementById('account').style.color="white";
}
function hideAccount(){
    document.getElementById('account').style.textShadow = "none";
    document.getElementById('account').style.color="black";
}

function showLaw(){
    document.getElementById('law').style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
    document.getElementById('law').style.color="white";
}
function hideLaw(){
    document.getElementById('law').style.textShadow = "none";
    document.getElementById('law').style.color="black";
}

function showStart(){
    document.getElementById('start').style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
    document.getElementById('start').style.color="white";
}
function hideStart(){
    document.getElementById('start').style.textShadow = "none";
    document.getElementById('start').style.color="black";
}

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll(".title");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
