
$(document).ready(function(){
	$('.ba-card__tab').on('click', function(){
		$('.ba-card__tab').siblings().addClass('ba-card__tab--nonactive');
		$(this).removeClass('ba-card__tab--nonactive');

		var $headTab = $(this).data('type');
		// console.log($headTab);
		
		$('.ba-card__content-tab').hide();
		$('.ba-card__content-tab[data-type="' + $headTab + '"]').show();
		
	});

	// $('.ba-card__info').on('click', function(){
	// 	$('.ba-card__content-tab').hide();
	// 	$('.ba-card__content-info').show();
	// });

	// $('.ba-card__ratings').on('click', function(){
	// 	$('.ba-card__content-tab').hide();
	// 	$('.ba-card__content-ratings').show();
	// });

	// $('.ba-card__buy').on('click', function(){
	// 	$('.ba-card__content-tab').hide();
	// 	$('.ba-card__content-buy').show();
	// });

});

