// Checks if the screen resolution < 1080 in that case display warning message
var screenWidth = window.screen.availWidth;

if(screenWidth <= 1080)
{
    alert("The mobile version of this website is still in dev. Weird visuals and bugs warning !");
}