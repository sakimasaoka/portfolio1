$(document).on('turbolinks:load', function() {
  $('.point').mouseover(function(){  
    $('.worksweb').show()
  });
  $('.point').mouseout(function(){  
    $('.worksweb').hide();
  });
  $('.point1').mouseover(function(){  
    $('.worksweb1').show()
  });
  $('.point1').mouseout(function(){  
    $('.worksweb1').hide();
  });

});