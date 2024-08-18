var user = document.getElementById("nav-profile").href;
var userid = user.substring(0, user.length - 7);
var img = browser.runtime.getURL("resources/star.png");

var inventory = document.getElementById("nav-inventory").parentElement;

var newli = inventory.cloneNode(true);
var newa = newli.firstChild;
newa.id = "nav-favorites";
newa.href = userid + "favorites#!/";
newa.lastChild.textContent = "Favorites";
newa.firstChild.firstChild.style.backgroundImage = "url('" + img + "')";
newa.firstChild.firstChild.style.backgroundPosition = "center";
newa.firstChild.firstChild.style.backgroundSize = "contain";

inventory.parentNode.insertBefore(newli, inventory.nextSibling);