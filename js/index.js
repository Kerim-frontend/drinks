$('.contact__input').on('input', function(){
  var $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('contact__input_filled');
  } else {
      $this.addClass('contact__input_filled');
  }
});
