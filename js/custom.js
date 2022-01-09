$(document).ready(function() {
	
	//STICKY MENU
	$('.js-services').waypoint(function(direction){
		if(direction== "down") {
			jQuery('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	});



	// MIXITUP (PROTFOLIO SECTION)
	var mixer= mixitup('.Mix');
	// Scroll Behavior for id/internet explore
	$('a').on('click', function(event) {
		if (this.hash !=="") {
			event.preventDefault();
			var hash=this.hash;
			$('html,body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {

			window.location.hash = hash;
			});
		}
	});
	
});


function openNav() {
	document.getElementById("mynav").style.width="100%";
}
function closeNav() {
	document.getElemnetById("mynav").style.width="0%";
}