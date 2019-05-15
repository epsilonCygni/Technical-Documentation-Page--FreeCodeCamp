// When the user scrolls down ...px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if ((document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) && (window.screen.width > 765 || window.innerWidth > 765)) {
        document.getElementById("myBtn").style.opacity = "0.5";
        document.getElementById("myBtn").style.width = "60px";
    } else if ((document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) && (window.screen.width <= 765 || window.innerWidth <= 765)) {
        document.getElementById("myBtn").style.opacity = "0.5";
        document.getElementById("myBtn").style.width = "60px";
    } else {
        document.getElementById("myBtn").style.opacity = "0";
        document.getElementById("myBtn").style.width = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}