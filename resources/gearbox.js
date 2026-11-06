var userid = document.head.querySelector("[name~=user-data]").dataset.userid;
var inventory = document.querySelector("li:has(a[href='https://www.roblox.com/users/inventory'])");

var newli = inventory.cloneNode(true);
var newa = newli.firstChild;
newa.href = "https://www.roblox.com/users/" + userid + "/favorites#!/";
newa.lastChild.textContent = "Favorites";
newa.querySelector(".icon").className = "icon-favorite";

inventory.parentNode.insertBefore(newli, inventory.nextSibling);
