/********************************
* Brandon Degarimore
* IT 328
* Amazeriffic To-Do-List Javascript
* Revision v3
********************************/


var main = function(){
	"use strict";


	//To Do Array
	var toDos = ["Get groceries",
		"Make up some new ToDos",
		"Prep for Monday's class",
		"Answer emails",
		"Take Gracie to the park",
		"Finish writing this book"];

	$(".tabs a span").toArray().forEach(function (element) {
			var $element = $(element);
			// create a click handler for this element
			$element.on("click", function () {
			var $content,
			$input,
			$button,
			i;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

		if ($element.parent().is(":nth-child(1)")) {
			// newest first, so we have to go through
			// the array backwards
			$content = $("<ul>");

			for (i = toDos.length-1; i >= 0; i--) {
			$input = $("<input>"),
			$button = $("<button>").text("-");
			$content.append($button, $("<li>").text(toDos[i],'</li>'));
			$button.on("click", function () {
				$('<li>').hide();
			});
			}

		} 

		else if ($element.parent().is(":nth-child(2)")) {
			// oldest first, so we go through the array forwards
			$content = $("<ul>");

			toDos.forEach(function (todo) {
			$button = $("<button>").text("-");
			$content.append($button, $("<li class='hide'>").text(todo, '</li>'));

			$button.on("click", function () {
				$(".hide").hide();
			});

			});
		} 

		else if ($element.parent().is(":nth-child(3)")) {
			// input a new to-do
			$input = $("<input>"),
			$button = $("<button>").text("+");
			$button.on("click", function () {
			if ($input.val() !== "") {
			toDos.push($input.val());
			$input.val("");
			}
			});

			$content = $("<div>").append($input, $button);
		}

		$("main .content").append($content);
		return false;

		});
		});

		$(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);