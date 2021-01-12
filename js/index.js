$('.slider__wrapper').slick({
    prevArrow:'<button class="slider-arrows slider-arrows__left"> prev</button>',
    nextArrow: '<button class="slider-arrows slider-arrows__right"> next</button>',
})
$('.review__slider').slick({
    arrows: false,
    dots: true,
    
})
$('.offer__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '-30px',
    infinite: false,
    responsive: [
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerMode: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
    ]

});
$('.Events__slider').slick({
    prevArrow: '<img class="slider-arrows slider-arrows__eventsprev"  src="img/Events-prev.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__eventnext" src="img/Events-next.png" alt=""></img>',
    responsive: [
        {
          breakpoint: 1340,
          settings: {
         arrows:false,
         dots: true,
          }
        },
    ]
})

$('.contact__input').on('input', function(){
  var $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('contact__input_filled');
  } else {
      $this.addClass('contact__input_filled');
  }
});


function app(){
   const buttons = document.querySelectorAll('.Products__link');
   const cards =  document.querySelectorAll('.Products__card')
   function fiter(category, items){
    items.forEach((item) =>{
           const isItemFiltired =  !item.classList.contains(category);
           const isShowAll = category.toLowerCase() === 'all';

           if(isItemFiltired && !isShowAll){
              item.classList.add('hide')
           } else{
              item.classList.remove('hide')
           }
    });
   }

    
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            const currenCategory = button.dataset.filter
            fiter(currenCategory,cards)
        });
    })
} 

app();