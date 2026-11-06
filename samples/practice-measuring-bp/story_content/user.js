window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var d = new Date();
var yyyy = d.getFullYear();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentMonth = month[d.getMonth()];
var dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var weekDay = dayNames[d.getDay()];
var daySyntax = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'];
var dd = daySyntax[d.getDate()-1];
var todaysDate = weekDay + ", " + currentMonth + " " + dd + ", " + yyyy
console.log(todaysDate);
GetPlayer().SetVar("currentDate",todaysDate);
}

window.Script2 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);

var ocount = player.GetVar("UserOrganisation");
var onumChars = ocount.length;
player.SetVar("oCharLength", onumChars);

var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));

}

window.Script3 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script4 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script5 = function()
{
  sendTimerStatement("slide","PRACTICE MEASURING BP – NINA S.");
}

window.Script6 = function()
{
  var d = new Date();
var yyyy = d.getFullYear();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentMonth = month[d.getMonth()];
var dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var weekDay = dayNames[d.getDay()];
var daySyntax = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'];
var dd = daySyntax[d.getDate()-1];
var todaysDate = weekDay + ", " + currentMonth + " " + dd + ", " + yyyy
console.log(todaysDate);
GetPlayer().SetVar("currentDate",todaysDate);
}

window.Script7 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script8 = function()
{
  sendTimerStatement("slide","MODULE INTRODUCTION");
}

window.Script9 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script10 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script11 = function()
{
  sendTimerStatement("slide","PRACTICE MEASURING BP – NINA S.");
}

window.Script12 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script13 = function()
{
  sendTimerStatement("slide","PRACTICE MEASURING BP – NINA S.");
}

window.Script14 = function()
{
  manageTimer.slide.reset();
}

window.Script15 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script16 = function()
{
  sendTimerStatement("slide","PRACTICE MEASURING BP – NINA S.");
}

window.Script17 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script18 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

window.Script19 = function()
{
  manageTimer.slide.reset();
}

window.Script20 = function()
{
  sendTimerStatement("slide","PRACTICE MEASURING BP – NINA S.");
}

window.Script21 = function()
{
  var player = GetPlayer();
var count = player.GetVar("UserName");
var numChars = count.length;
player.SetVar("CharLength", numChars);
var ModuleProgress = parseInt(ModuleProgress);
var score = player.GetVar("ModuleProgress");
player.SetVar("ModuleProgress",Math.round(score));
}

};
