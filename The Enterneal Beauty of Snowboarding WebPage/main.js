const header = document.getElementById
("header");

window.addEventListener("scroll", function()
{
let offset = window.pageYOffset;
header.style.backgroundPositionY = offset
* 0.7+ "px";
})

