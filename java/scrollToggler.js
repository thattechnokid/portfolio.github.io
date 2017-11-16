function scrollTo(){
  var totalItems = $("body .container-fluid").length;
   var scrollVal = $(".container-fluid").height();
  var totalHeight = (totalItems*scrollVal)-($("body").height());
  var currentScrollVal = parseInt($("body").scrollTop());


  $('.up').click(function(){
    var currentScrollVal = parseInt($("body").scrollTop());

    $("html, body").animate({ scrollTop: (currentScrollVal - scrollVal) }, 800);
  });

  $('.down').click(function(){
    var currentScrollVal = $("body").scrollTop();
    $("html, body").animate({ scrollTop: (scrollVal + currentScrollVal) }, 800);
  });
};
