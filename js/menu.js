$(document).ready(main);

var estado = true;
function main(){	
	$('.menu').click(function(){
		$('nav').animate({
			height:'toggle'
		})
	});
};