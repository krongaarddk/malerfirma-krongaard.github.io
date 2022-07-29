function navbarExpand() {
var x = document.getElementById("navbar-list");
if (x.className === "ul-navbar") {
    x.className += " responsive";
} else {
    x.className = "ul-navbar";
}
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNavbarSide()};

// Get the header
var item0 = document.getElementById("navbar-sticky-side0");
var item1 = document.getElementById("navbar-sticky-side-item-1");
var item2 = document.getElementById("navbar-sticky-side-item-2");
var item3 = document.getElementById("navbar-sticky-side-item-3");

// Get the offset position of the navbar
var sticky = item0.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbarSide() {
  if (window.pageYOffset > sticky) {
    item1.classList.add("sticky-1");
    item2.classList.add("sticky-2");
    item3.classList.add("sticky-3");
  } else {
    item1.classList.remove("sticky-1");
    item2.classList.remove("sticky-2");
    item3.classList.remove("sticky-3");
  }
}
