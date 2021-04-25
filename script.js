function showAdult(){
    document.getElementById('adult-pic').style.border="solid 3px white";
    document.getElementById('adult-text').style.color="white";
}

function hideAdult(){
    document.getElementById('adult-pic').style.border="none";
    document.getElementById('adult-text').style.color="#808080";
}

function hiKid(){
    document.getElementById('kid-pic').style.border="solid 3px white";
    document.getElementById('kid-text').style.color="white";
}

function byeKid(){
    document.getElementById('kid-pic').style.border="none";
    document.getElementById('kid-text').style.color="#808080";
}

function goodMorning(){
    document.getElementById('sadie-pic').style.border="solid 3px white";
    document.getElementById('sadie-text').style.color="white";
}

function goodEvening(){
    document.getElementById('sadie-pic').style.border="none";
    document.getElementById('sadie-text').style.color="#808080";
}

function showDisclaimer(){
    document.getElementById('disclaimer').style.display="flex";
}

function hideDisclaimer(){
    document.getElementById('disclaimer').style.display="none";
}

function showWelcome(){
    document.getElementById('welcome').style.border="solid 1px white";
    document.getElementById('welcome').style.color="white";
}

function hideWelcome(){
    document.getElementById('welcome').style.border="solid 1px #808080";
    document.getElementById('welcome').style.color="#808080";
}

function aboutFade(){
    document.getElementById('about').style.backgroundColor="rgb(78, 79, 79, 0.3)";
}

function aboutDark(){
    document.getElementById('about').style.backgroundColor="rgb(78, 79, 79, 0.6)";
}

function revealAbout(){
document.getElementById('show-about').style.display="flex";
document.getElementById('my-pic').style.display="none";

    // document.getElementById('show-about').style.webkitTransition="all .3 linear";
    // document.getElementById('show-about').style.webkitTransition="all .3 linear";
    // document.getElementById('show-about').style.transition="all .3 linear";
    // document.getElementById('show-about').style.webkitTransform="scale(1)";
    // document.getElementById('show-about').style.transform="scale(1)";
    // document.getElementById('show-about').style.opacity="1";
}

function closeAbout(){
    document.getElementById('show-about').style.display="none";
    document.getElementById('my-pic').style.display="block";
}
function openRes(){
    document.getElementById('res-screen').style.display="flex";
    document.getElementById('my-pic').style.display="none";
    document.getElementById('sign-out').style.display="none";
    document.getElementById('my-pic').style.display="none";
    document.getElementById('designer').style.display="none";
    document.getElementById('about').style.display="none";
}

function closeRes(){
    document.getElementById('res-screen').style.display="none";
    document.getElementById('my-pic').style.display="flex";
    document.getElementById('sign-out').style.display="flex";
    document.getElementById('my-pic').style.display="flex";
    document.getElementById('designer').style.display="flex";
    document.getElementById('about').style.display="flex";
}