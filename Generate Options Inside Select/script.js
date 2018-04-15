$(document).ready(function(){
	"use strict";

	for (var i=1993 ; i<2016 ; i++)
	{
		
		$("<option>",{value:i,text:i}).appendTo($("#years"));
		
	}

});
