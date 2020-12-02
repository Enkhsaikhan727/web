'use strict';

function TableTemplate(){

}

TableTemplate.fillIn = function(id, dictionary) {
	var tds = document.querySelectorAll("#" + id + " TD");

	Array.prototype.forEach.call(tds, function(element) {
		var templateProcesser = new Cs142TemplateProcessor(element.textContent);
		element.textContent = templateProcesser.fillIn(dictionary);
	});

	var ths = document.querySelectorAll("#" + id + " TH");

	Array.prototype.forEach.call(ths, function(element) {
		var templateProcesser = new Cs142TemplateProcessor(element.textContent);
		element.textContent = templateProcesser.fillIn(dictionary);
	});

	var table = document.getElementById(id);
	if (table.style.visibility === "hidden") {
		table.style.visibility = "visible";
	}

};