$(window).scroll(function(){
	parallax();
})
function parallax(){
	var wScroll = $(this).scrollTop();
	$('.landing-heading h1').css({
		'filter' : 'blur(' + wScroll / 4 + 'px)'
	})
}

$(window).scroll(function(){
	parallaxtwo();
})
function parallaxtwo(){
	var wScroll = $(this).scrollTop();
	$('.landing-heading p').css({
		'filter' : 'blur(' + wScroll / 4 + 'px)'
	})
}

$(window).scroll(function(){
	parallaxthree();
})
function parallaxthree(){
	var wScroll = $(this).scrollTop();
	$('.link a').css({
		'filter' : 'blur(' + wScroll / 4 + 'px)'
	})
}



$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 1.2)) {
				$('.image img').each(function(){
					$('.image img').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about').each(function(){
					$('.about').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about-heading h1').each(function(){
					$('.about-heading h1').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about p').each(function(){
					$('.about p').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.working ').offset().top - ($(window).height() / 2)) {
				$('.working-heading h1').each(function(){
					$('.working-heading h1').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.working ').offset().top - ($(window).height() / 2)) {
				$('.working-heading p').each(function(){
					$('.working-heading p').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.pehla ').offset().top - ($(window).height() / 2)) {
				$('.pehla img').each(function(){
					$('.pehla img').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.doosra ').offset().top - ($(window).height() / 2)) {
				$('.doosra img').each(function(){
					$('.doosra img').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.teesra ').offset().top - ($(window).height() / 2)) {
				$('.teesra img').each(function(){
					$('.teesra img').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.pehla').offset().top - ($(window).height() / 2)) {
				$('.left-desc').each(function(){
					$('.left-desc').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.pehla').offset().top - ($(window).height() / 2)) {
				$('.right-desc').each(function(){
					$('.right-desc').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.doosra').offset().top - ($(window).height() / 2)) {
				$('.left-desc-two').each(function(){
					$('.left-desc-two').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.doosra').offset().top - ($(window).height() / 2)) {
				$('.right-desc-two').each(function(){
					$('.right-desc-two').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.teesra').offset().top - ($(window).height() / 2)) {
				$('.left-desc-three').each(function(){
					$('.left-desc-three').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.teesra').offset().top - ($(window).height() / 2)) {
				$('.right-desc-three').each(function(){
					$('.right-desc-three').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.chautha').offset().top - ($(window).height() / 2)) {
				$('.chautha img').each(function(){
					$('.chautha img').addClass('is-showing')
				})
			}
	})
})