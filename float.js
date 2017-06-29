// Sticky social share buttons to container 
$(document).ready(function() {
  $(window).bind('scroll', function() {
      if($(window).scrollTop() >= $('#content-footer').offset().top + $('#content-footer').outerHeight() - window.innerHeight) {
          $("#social-side-links").fadeOut( "fast");
      }
      else {
        $("#social-side-links").fadeIn( "slow");
      }
  });
});
