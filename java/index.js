$(document).ready(function(){
  $(".breadcrumb").addClass("hidden");
  
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


    $(window).scroll(function(){
      var scrollHeight1 = document.getElementById('page1').scrollHeight;
      // console.log(scrollHeight1);
      var scrollHeight2 = document.getElementById('page2').scrollHeight;
      // console.log(scrollHeight2);

      if ($(document).scrollTop() >= 600) {
        $(".breadcrumb").removeClass("hidden");
        $(".breadcrumb").addClass("visible");
      }else{
        $(".breadcrumb").removeClass("visible");
        $(".breadcrumb").addClass("hidden");
      }
      if ($(document).scrollTop() >= 1420.04) {
        $(".breadcrumb").css("height","140px");
        $("#bCrumbLnk3").removeClass("hidden");
      }else{
        $(".breadcrumb").css("height","100px");
        $("#bCrumbLnk3").addClass("hidden");
      }
    });


});
