
function io_class_toggle(cls,tgl) {
    jQuery(cls).toggleClass(tgl);
}

if(lowerie){
	document.documentElement.innerHTML = 'Update your browser please!<br><a href="http://outdatedbrowser.com" target="_blank">Check available browsers</a>';
}


;(function($) {
	
	$(window).resize(function(){

	});

	$(window).load(function(){

	});

	$(document).ready(function() {
		if(window.location.hash == '#policy'){
			$("#dpp_body").addClass('in');
			setTimeout(function() {
				$("#policy_wrap").addClass('flash');
				setTimeout(function() {
					$("#policy_wrap").removeClass('flash');
				},1000);
			},500);
		}

	});

})(jQuery);
	