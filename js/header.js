/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.addEventListener("wheel", event => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("Header").style.top = "0";
    } else {
      document.getElementById("Header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
 });


// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("Header").style.top = "0";
//   } else {
//     document.getElementById("Header").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//  window.addEventListener('scroll', () => {
//      console.log('scrolled');
//  });

//  window.addEventListener("wheel", event => console.info(event.deltaY));