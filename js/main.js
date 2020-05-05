$(function(){
	$('.projects__slider').slick({
		centerPadding: '260px',
		arrows: false,
		slidesToShow: 3,
  		slidesToScroll: 2,
  		centerMode: true,
  		responsive: [
  		{
  			breakpoint: 2320,
  			settings: {
  				slidesToShow: 3,
  				centerPadding: "120px"
  			}
  		},
  		{
  			breakpoint: 2050,
  			settings: {
  				slidesToShow: 3,
  				centerPadding: "50px"
  			}
  		},
  		{
  			breakpoint: 1900,
  			settings: {
  				slidesToShow: 2,
  				centerMode: true
			}
  		},
  		{
  			breakpoint: 1710,
  			settings: {
  				slidesToShow: 2,
  				centerPadding: "180px"
			}
  		},
  		{
  			breakpoint: 1580,
  			settings: {
  				slidesToShow: 2,
  				centerPadding: "100px"
			}
  		},
  		{
  			breakpoint: 1410,
  			settings: {
  				slidesToShow: 2,
  				centerPadding: false
			}
  		},
  		{
  			breakpoint: 1250,
  			settings: {
  				slidesToShow: 1,
  				centerMode: true
			}
  		},
  		{
  			breakpoint: 1120,
  			settings: {
  				slidesToShow: 1,
  				centerPadding: "200px"
			}
  		},
  		{
  			breakpoint: 1000,
  			settings: {
  				slidesToShow: 1,
  				centerPadding: "160px"
			}
  		},
  		{
  			breakpoint: 820,
  			settings: {
  				slidesToShow: 1,
  				centerPadding: "120px"
			}
  		},
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          centerPadding: "80px"
      }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px"
      }
      },
      {
        breakpoint: 519,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px"
      }
      }
  		]
	});
	$('.mobile-menu__btn').click(function(){
		$('.mobile-menu__list').slideToggle(600);
	});
 
    $(window).scroll( function(){
 
        $('.hidden').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},300);
                    
            }
            
        }); 
    
    });
	
});