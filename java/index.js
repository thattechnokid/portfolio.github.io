$(document).ready(function(){
  $("#clickToScroll").animate({
    bottom:'75px',
    opacity:'1.0'
  },500);

// -----For typed text------

    var options = {
      strings: ["I Build Websites", "I Build Web Applications"],
      startDelay: 1000,
      typeSpeed: 70,
      backDelay:1000,
      smartBackspace: true,
      backSpeed: 60
    }
    var typed = new Typed(".typed-txt", options);

    // -------For smooth anchor tag scrolling-----
    $("a").on('click', function(event) {
      if (this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});
