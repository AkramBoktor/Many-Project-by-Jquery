$(document).ready(function(){
	"use strict";
	
	var maxText = $("textarea").attr("maxlength");
	
	$(".message").html("<span>"+maxText+"</span> Character Remaining");
	
	$("textarea").keyup(function(){
		
		var textLen = $(this).val().length;
		
		var remText = maxText - textLen ;
		
		$(".message").html("<span>"+remText+"</span> Character Remaining");

	});
	alert(maxText);
	
});