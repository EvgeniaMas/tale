$(document).ready(function () {
	// Всплывающие формы
	$('.pop-up').click(function(e){
		var ordername = $(this).data('ordername');
			
		$('#pop-up').bPopup({
			positionStyle: 'fixed',
			onOpen:  function(){ 
				$(this).find('.ordername').val(ordername);	
			},
			onClose: function() {
				$(this).find('.required').each( function(){
					$(this).removeClass('error');
				});
				$(this).find('.ordername').val('');
			}
		});	
		e.preventDefault();
	}); //end forms
	
	// Отправка письма с помощью AJAX
    $('form').submit(function(e){
        e.preventDefault();
		var errors = false;
		
		$(this).find('.required').each(function(){
			if($(this).val() == '' && $(this).is(":visible")) { 
				errors = true; 
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}	
		});	
		
		if(errors == false) {
			$.ajax({
				url: 'php/send.php',
                type: 'post',
                context: this,
                data: $(this).serialize(),
				success: function(response){			
					$('#pop-up').bPopup().close();
					$('#pop-up-success').bPopup({
						positionStyle: 'fixed',
						speed: 450,
						transition: 'slideDown'
					});
					//yaCounter.reachGoal('ORDER'); return true;
				}
            });
		}
	}); // end submit()
	
	// Слайдер для отзывов
	if($('#firstpage').length) {
		$('#firstpage .slides').owlCarousel({
			loop: true,
			nav: false,
			items: 1,
			dots: false,
			smartSpeed: 600,
			navText: false,
			autoplay: true,
			mouseDrag: false,
			touchDrag: false
		});
	} // end
	
	// Слайдер для отзывов
	if($('#individual').length) {
		$('#individual .slides').owlCarousel({
			loop: true,
			nav: true,
			items: 1,
			dots: false,
			smartSpeed: 600,
			navText: false,
			autoplay: true
		});
	} // end
	
	// Слайдер для художественной рукописи
	if($('#art').length) {
		$('#art .slides').owlCarousel({
			loop: true,
			nav: true,
			items: 1,
			dots: false,
			smartSpeed: 600,
			navText: false
		});
	} // end
	
	// Слайдер для отзывов
	if($('#reviews').length) {
		$('#reviews .items').owlCarousel({
			loop: false,
			nav: false,
			items: 1,
			dots: true,
			smartSpeed: 600,
			navText: false
		});
	} // end

	// Прокрутка при клике и обработка скроллинга
	$("a.header-nav-link, .scroll").click(function(e) {
		e.preventDefault();
		var offsetTop = $("#"+$(this).data("target")).offset().top;
		$('html, body').animate({scrollTop: offsetTop}, 1000);
	}); // end
});