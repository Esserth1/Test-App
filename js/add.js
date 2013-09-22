var add = (function(module) {
	
	module.New = function(resultObject) {
		
		resultObject.prepend(Date() + '</br>')
	
	}
	
	return module;
}(add || {}));