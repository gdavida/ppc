
// change navbar bg color on scroll

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#site-header').css('background-color', '#040229', 'border-bottom','1px solid white');
       } else {
          $('#site-header').css('background-color', 'transparent');
       }
   });
});