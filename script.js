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