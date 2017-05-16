var Ajax = (function(){
	
	var XHR = new XMLHttpRequest();

	var get = function(url){
		XHR.open('GET', url);
		XHR.send(null);
	}

	var post = function(url, type, data){
		XHR.open('POST', url);
		XHR.setRequestHeader('Content-type', type);
		XHR.send(data);
	}

	var send = function(method, url, type, data){
		if(method.toUpperCase() == 'GET'){
			return get(url);
		}
		else{
			return post(url, type, data);
		}
	}

	var init = function(method, url, type, data, success, error){
		var method = method || 'GET',
			url = url || '',
			type = type || 'application/x-www-foorm-urlencoded',
			data = data || '',
			success = success,
			error = error;

		return send(method, url, type, data);
	}

	return init;

})();













