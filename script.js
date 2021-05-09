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
    document.getElementById('grid-container').style.display="grid";
    document.getElementById('back').style.display="block";
    document.getElementById('my-pic').style.display="none";
    document.getElementById('sign-out').style.display="none";
    document.getElementById('my-pic').style.display="none";
    document.getElementById('designer').style.display="none";
    document.getElementById('about').style.display="none";
}

function closeRes(){
    document.getElementById('grid-container').style.display="none";
    document.getElementById('back').style.display="none";
    document.getElementById('my-pic').style.display="flex";
    document.getElementById('sign-out').style.display="flex";
    document.getElementById('my-pic').style.display="flex";
    document.getElementById('designer').style.display="flex";
    document.getElementById('about').style.display="flex";
}

function showA11y(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('a11y-big').style.display="block";
}
function leaveA11y(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('a11y-big').style.display="none";
}
function showBrit(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('brit-big').style.display="block";
}
function leaveBrit(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('brit-big').style.display="none";
}

function showDL(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('dl-big').style.display="block";
}
function leaveDL(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('dl-big').style.display="none";
}
function showSC(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('sc-big').style.display="block";
}
function leaveSC(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('sc-big').style.display="none";
}
function showEX(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('ex-big').style.display="block";
}
function leaveEX(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('ex-big').style.display="none";
}

// function showSoon1(){
//     document.getElementById('soon1').style.display="block";
// }
// function hideSoon1(){
//     document.getElementById('soon1').style.display="none";
// }

function showSoon2(){
    document.getElementById('soon2').style.display="block";
}
function hideSoon2(){
    document.getElementById('soon2').style.display="none";
}

function showSoon3(){
    document.getElementById('soon3').style.display="block";
}
function hideSoon3(){
    document.getElementById('soon3').style.display="none";
}

function showComingSoon(){
    document.getElementById('soon').style.display="block";
}

function hideComingSoon(){
    document.getElementById('soon').style.display="none";
}

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			event.preventDefault();
            document.getElementById('caret').src="images/caret-up.png";
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			event.preventDefault();
            document.getElementById('caret').src="images/caret-down.png";
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};