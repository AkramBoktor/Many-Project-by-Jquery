$(document).ready(function(){
	"use strict";
	
	$("button").click(function(){
		
		$(this).toggleClass("active");
		
		if($(this).hasClass("active")){
			
			$(this).text("Hide Password").prev("input").attr("type","text");
		}
		
		else
		{
			$(this).text("Show Password").prev("input").attr("type","password");
		}
	});
	
});