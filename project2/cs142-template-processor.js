function Cs142TemplateProcessor(template){
	this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary){
		var matches = this.template.match(/{{[^}]*}}/g); 
		var result = this.template;
		for (var i = 0; i < matches.length; i++) {
			var key = matches[i].substr(2, matches[i].length - 4);
			var replacement = dictionary[key] || "";
			result = result.replace(matches[i], replacement);
		}
		return result;
}