$(document).ready(function(){
	if($(window).width() <= 768){
		$('.btn_menu').on('click',function(){
			$('.profile_menu').animate({left: 0}, 490);
			$('html,body').animate({left: 200}, 500);
		});
		$('.btn_close').on('click',function(){
			$('.profile_menu').animate({left: -200}, 500);
			$('html,body').animate({left: 0}, 490);
		});
	}
	if($(window).width() > 768){
		$('.btn_menu').on('click',function(){
			$('.profile_menu').animate({left: 0}, 490);
			$('html,body').animate({left: 275}, 500);
		});
		$('.btn_close').on('click',function(){
			$('.profile_menu').animate({left: -275}, 500);
			$('html,body').animate({left: 0}, 490);
		});
	}

	$('html,body').on('click', function(event){
		var mouseCoord = event.pageX;
		if(mouseCoord <= 10 && $(window).width() > 768){
			$('.profile_menu').animate({left: 0}, 490);
			$('body').animate({left: 275}, 500);
		} else if(mouseCoord <= 10 && $(window).width() < 768){
			$('.profile_menu').animate({left: 0}, 490);
			$('body').animate({left: 200}, 500);
		}
	});

	$('html, body').on('mousemove',function(event){
		var mouseCoord = event.pageX;
		if(mouseCoord <= 10){
			$('body').css({cursor:'pointer'});
		} else{
			$('body').css({cursor:'default'});
		}
	});

	$('header button').on('click',function(){
		$('html,body').animate({scrollTop: $('.about_me').offset().top}, 1000);
	});

	$('.profile_menu a').on('click',function(event){
		event.preventDefault();
		var item = '.' + $(this).attr('href');
			$('html,body').animate({scrollTop: $(item).offset().top}, 1000);
	});

	function bothSideAnimate(op,left,obj){
		$(obj).animate({opacity: op}, 100);
		$(obj).animate({left: left}, 1000);
	}

	function progressBar(){
		$('.progressBar').each(function(){
			var percentOfProgress = $(this).data('percent');
			var progressBarWidth = percentOfProgress * $(this).width() / 100;
			if(percentOfProgress > 0){
				$(this).find('.pb_line').animate({ width: progressBarWidth }, 1000);
				$(this).find('.pb_line').html(percentOfProgress + "%&nbsp;");
			}
		})
	}

	$(window).scroll(function() {

		$('.profile_menu a').each(function(){
			var scrollPosition = $(window).scrollTop();
			var currentLink =  $(this);
			var element = '.' + $(this).attr("href");
			if($(element).position().top - 300 <= scrollPosition ){
				$('.profile_menu ul li').removeClass("active_menu");
				currentLink.parent().addClass("active_menu");
			} else if(scrollPosition == 0 ){
				$('.home').addClass('active_menu');
			}
			else{
				currentLink.parent().removeClass("active_menu");
			}
		}); 

		if($(this).scrollTop() + 500 > $('.about_me').offset().top){
			$('.back_to_top').fadeIn();
		} else{
			$('.back_to_top').fadeOut();
		}

		$('.right_side_description').each(function() {
			var position = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			if(position < scrollPos + 550 && $(window).width() > 1100 ){
				bothSideAnimate(1,60,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() > 515 && $(window).width() < 1100 ){
				bothSideAnimate(1,60,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 515){
				bothSideAnimate(1,40,$(this));
			}
		});


		$('.left_side_description').each(function() {
			var position = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			if(position < scrollPos + 550 && $(window).width() > 1100){
				bothSideAnimate(1,-390,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() < 1100 && $(window).width() > 800){
				bothSideAnimate(1,-390,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 800 && $(window).width() > 750){
				bothSideAnimate(1,-340,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 750 && $(window).width() > 600){
				bothSideAnimate(1,-290,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 600 && $(window).width() > 515){
				bothSideAnimate(1,-250,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 515 && $(window).width() > 450){
				bothSideAnimate(1,-210,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 450 && $(window).width() > 425){
				bothSideAnimate(1,-200,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() <= 425 && $(window).width() > 375){
				bothSideAnimate(1,-180,$(this));
			}
			if(position < scrollPos + 400 && $(window).width() < 375){
				bothSideAnimate(1,-145,$(this));
			}
		});

		$('.my_skills').each(function(){
			var position = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			if(position < scrollPos + 300 && $(window).width() > 1100){
				progressBar() ;
			}
			if(position < scrollPos + 250 && $(window).width() < 1100 && $(window).width() > 800){
				progressBar() ;
			}
			if(position < scrollPos + 250 && $(window).width() <= 800 && $(window).width() > 750){
				progressBar() ;
			}
			if(position < scrollPos + 250 && $(window).width() <= 750 && $(window).width() > 600){
				progressBar() ;
			}
			if(position < scrollPos + 250 && $(window).width() <= 600 && $(window).width() > 515){
				progressBar() ;
			}
			if(position < scrollPos + 200 && $(window).width() <= 515){
				progressBar() ;
			}
		});

	});

	$('.back_to_top').on('click',function(){
		$('body, html').animate({scrollTop: 0}, 1000);
	});

	$('.tab_content').not(':first').hide();
	$('.tab').on('click',function(){
		var itemNumber = $(this).index();
		$('.tab').removeClass('active_tab');
		$(this).addClass('active_tab');
		$('.tab_content').hide();
		$('.tab_content').eq(itemNumber).show();
		masonryInit();
	});

	$('.item_masonry').hover(function(){
		$(this).find('.cover_item_gallery').fadeIn('fast');
	}, function(){
		$(this).find('.cover_item_gallery').fadeOut('fast');
	});


	$('.cover_item_gallery').on('click',function(event){
		event.preventDefault();
	});

	function masonryInit(){
		$('.gallery').imagesLoaded(function(){
			$('.gallery').masonry({
				itemSelector: '.item_masonry',
				columnWidth: '.sizer4',
				percentPosition: true
			});
		});
	}
	masonryInit();

	$('.gallery').on('click','.item_masonry',function(){
		$(this).toggleClass('gigante');
		$('.gallery').masonry('layout');
	});

	$('input#name, input#email, textarea#message').blur(function(){
		var id = $(this).attr('id');
		var value = $(this).val();
		validate(id,value,$(this));

	});

	function validate(id,value,obj){
		switch(id){

			case 'name':
			var re_name =  /^[a-zA-Zа-яА-Я]+$/;

			if(value.length > 2 && value != '' && re_name.test(value)){
				$(obj).removeClass('error').addClass('not_error');
				$(obj).next('.error_block').text('');
			} else{
				$(obj).removeClass('not_error').addClass('error');
				$(obj).next('.error_block').html('Field Name is required.<br>Length of name must be 2 or more symbols.<br>Field must contain only russian or english letters').css({color: 'red'});
			}
			break;

			case 'email':
			var re_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
			if(value != '' && re_email.test(value)){
				$(obj).removeClass('error').addClass('not_error');
				$(obj).next('.error_block').text('');
			} else{
				$(obj).removeClass('not_error').addClass('error');
				$(obj).next('.error_block').html('Field Email is required.<br>For example (qwerty123@gmail.com)').css({color: 'red'});
			}
			break;

			case 'message':
			if(value != '' && value.length < 400){
				$(obj).removeClass('error').addClass('not_error');
				$(obj).next('.error_block').text('');
			} else{
				$(obj).removeClass('not_error').addClass('error');
				$(obj).next('.error_block').html('Field "Message" is required.<br>Length of message must be less than 400 symbols').css({color: 'red'});
			}
			break;
		}
	}

	$('.contacts form').submit(function(event){
		event.preventDefault();
		validate($('input#name').attr('id'),$('input#name').val(),$('input#name'));
		validate($('input#email').attr('id'),$('input#email').val(),$('input#email'));
		validate($('textarea#message').attr('id'),$('textarea#message').val(),$('textarea#message'));
		if($('.not_error').length == 3){
			$('.succesful_sending').animate({opacity: 1}, 500).delay(3000).animate({opacity: 0}, 500);
		}
	});

	$('.tab').on('click',function(){
		var itemNumber = $(this).index();
		if(itemNumber == 0){
			location.hash = 'tab_1';
			tabLocationSave($(this).index() );
		} else{
			location.hash = 'tab_2';
			tabLocationSave($(this).index());
		}
		masonryInit();
	});

	var id = location.hash.slice(-1);
	var numericId = parseInt(id,10) - 1;
	if(isNaN(numericId)){
		numericId = 0;
	}

	function tabLocationSave(id){
		$('.tab_content').hide()
		$('.tab').removeClass('active_tab');
		$('.tab').eq(id).addClass('active_tab');
		$('.tab_content').eq(id).show();
	}

	tabLocationSave(numericId);
});




