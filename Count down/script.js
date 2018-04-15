$(document).ready(function(){
	"use strict";
	
	var count = setInterval(function(){
		
		var counter=parseInt($('.countdown').html());
		
		if(counter!==0)
		{
			$('.countdown').html(counter-1);
		}
		
		else
		{
			clearInterval(counter);
			
		}
	},100);
	
});
/*ممكن اعمالها للالوان وازين بيها الحاجات */