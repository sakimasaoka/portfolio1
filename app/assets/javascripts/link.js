$(document).on('turbolinks:load', function() {
  $('.worksmenu').mouseover(function(){  
    console.log();
    $('.worksweb').show()
  });
  $('.worksmenu').mouseout(function(){  
    $('.worksweb').hide();
  });
  $('.point1').mouseover(function(){  
    $('.worksweb1').show()
  });
  $('.point1').mouseout(function(){  
    $('.worksweb1').hide();
  });

});