// Checks if the screen resolution < 1080 in that case display warning message
var screenWidth = window.screen.availWidth;

if(screenWidth <= 1080)
{
    alert("The mobile version of the website isn't fully complete. Please note that bugs and weird visuals will be patched.");
}

console.log(window.innerHeight);
console.log(window.innerWidth);