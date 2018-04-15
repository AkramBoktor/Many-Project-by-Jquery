$(document).ready(function(){
	"use strict";
	
	(function animate(){ /* self invkoe function */
		
	$(".offer img").animate({
		top:'-300px'
		
	},1000,function(){ /*call back function*/
		
		$(this).animate({
			
			top:'-230px'
		},1000,function(){animate();});
	});
	
	}());
	
});
/*ممكن اعمالها للالوان وازين بيها الحاجات */