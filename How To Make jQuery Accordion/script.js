$(document).ready(function(){
	"use strict";

		$("div:first").css("display","block");
		
		$("section h3").click(function(){
			
			$(this).next().slideToggle(500);
			$("div").not($(this).next()).slideUp(500);
		});

	
	
});
