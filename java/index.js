$(document).ready(function(){
  // $(".breadcrumb").addClass("hidden");
  // $(".breadcrumb").css("height","100px");


      var width = $(document).width();

      if (width <= 768) {
        $(".page4-desktop").addClass("hidden");
        $(".page4-mobile").removeClass("hidden");
        $("#clickToScroll").animate({
          bottom:'100px',
          opacity:'1.0'
        },500);
      }else{
        $(".page4-desktop").removeClass("hidden");
        $(".page4-mobile").addClass("hidden");
      }

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

    // $(window).scroll(function(){
    //
    //   if ($(document).scrollTop() >= 600) {
    //     $(".breadcrumb").removeClass("hidden");
    //     $(".breadcrumb").addClass("visible");
    //   }else{
    //     $(".breadcrumb").removeClass("visible");
    //     $(".breadcrumb").addClass("hidden");
    //   }
    //   if ($(document).scrollTop() >= 1420.04) {
    //     $(".breadcrumb").css("height","140px");
    //     $("#bCrumbLnk3").removeClass("hidden");
    //   }else{
    //     $(".breadcrumb").css("height","100px");
    //     $("#bCrumbLnk3").addClass("hidden");
    //   }
    //   if ($(document).scrollTop() >= 2130.06) {
    //     $(".breadcrumb").css("height","180px");
    //     $("#bCrumbLnk4").removeClass("hidden");
    //   }else{
    //     $(".breadcrumb").css("height","140px");
    //     $("#bCrumbLnk4").addClass("hidden");
    //   }
    // });
    $("#contactMe").on('click',function(){
        $("#contactMe").animate({
          fontSize:'h1'
        },
          {
            step: function(){
              window.location.href = "#contactMe";
              $(".contact-div").css({"height":"2000px","transition":"all 2s ease"});
              $("#contactDiv").css({"height":"100%","width":"100vw","transition":"all 2s ease"});
              $("#contactDiv").removeClass("col-md-10 col-md-offset-1");
              $(".contact-img").css({"clip":"rect(0px,100vw,500px,0px)","filter":"blur(0px)","transition":"all 2s ease"});
              $("#contactTxt").css({"transform":"translate(-50%,400%)","transition":"all 2s ease"});
              $(".contact-div").css({"height":"2000px","transition":"all 2s ease"});
            }
          },4000);

    });

}); //----------END of On Document Loaded----------
