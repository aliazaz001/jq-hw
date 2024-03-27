$(document).ready(function() {
  $('.thumbnail').click(function() {
    var imgSrc = $(this).attr('src');
    $('.lightbox-image').attr('src', imgSrc);
    $('.lightbox').fadeIn();
  });

  $('.close-btn').click(function() {
    $('.lightbox').fadeOut();
  });
});
