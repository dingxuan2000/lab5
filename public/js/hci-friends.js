'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	// $('.friends').click(function(e){
	// 	var rename = $(this).click(anagrammedName);
	// 	console.log(rename);
	// })
	//var rename =
	$('a.name').click(projectClick);
	//console.log(rename);
	//$(this).text(rename);
}

function projectClick(e){
	e.preventDefault();
	var curr = $(this).text();
	//console.log(curr);
	var rename = anagrammedName(curr);
	//console.log(anagrammedName(curr));
	$(this).text(rename);
	$(this).html('<h3>'+rename+'</h3>'); //match to the original css styling
	// $(this).css({
	// 	'font-family':'"Helvetica Neue", Helvetica, Arial, sans-serif',
	// 	'font-weight':'500',
	// 	'line-height': '1.1',
	// 	'color': 'inherit'
	// });

	//return rename;
}
function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}