function navbarExpand() {
var x = document.getElementById("navbar-list");
if (x.className === "ul-navbar") {
    x.className += " responsive";
} else {
    x.className = "ul-navbar";
}
}
