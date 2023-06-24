var serverhost = 'http://127.0.0.1:8000';

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			  
			var url = serverhost + '/chromeextension/spacy/?text=' + encodeURIComponent(request.text);
			// now we need something to get the html of a page then extract all the text from that html
			
			console.log(url);
			
            //var url = "http://127.0.0.1:8000/chromeextension/spacy/?text=	"
			fetch(url, { mode: 'cors' })
			.then(response => response.json())
			.then(response => sendResponse({
                entities: response
            }))
			.catch(error => console.log(error))
				
			return true;  // Will respond asynchronously.
		  
	});
