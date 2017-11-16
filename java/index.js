$(document).ready(function(){
  $("#clickToScroll").animate({
    bottom:'75px',
    opacity:'1.0'
  },500);


    var options = {
      strings: ["I Build Websites", "I Build Web Applications"],
      startDelay: 1000,
      typeSpeed: 70,
      backDelay:1000,
      smartBackspace: true,
      backSpeed: 60
    }
    var typed = new Typed(".typed-txt", options);


});
