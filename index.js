var typed = new Typed('#element', {
  strings: ['Web Developer.', 'Web Designer.','Gamer.'],
  typeSpeed: 50,
  loop:true,
  loopCount:Infinity,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
});

function myFunction() {
  var x = document.getElementById("hamburger-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";
} else {
  document.getElementById("navbar").style.top = "-6.8vh";
}
prevScrollpos = currentScrollPos;
}