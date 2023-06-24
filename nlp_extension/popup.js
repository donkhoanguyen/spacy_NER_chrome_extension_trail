
function extractText() {
    var textOnPage = document.body.innerText;
    chrome.runtime.sendMessage({ text: textOnPage });
  }
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  console.log(request);
  alert("fcuk");
  if (request.action === 'extractText') {
    extractText();
  }
  return "ditmethangkhoa";
});


$(function () {
	$('#startNER').click(function () {
	  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(
		  tabs[0].id,
		  { action: 'extractText' },
		  function (response) {

			/* trial below
			var textOnPage = document.body.innerText;
			if (textOnPage) {
			chrome.runtime.sendMessage( 
				{ text: textOnPage }, 
				function (response) {
				var result = response.entities;
				alert (JSON.stringify(result));
			*/

			
			alert(response);
			alert(response.text);
			if (response && response.text) {
				alert("something1");
			  chrome.runtime.sendMessage(
				{ action: 'extractedText', text: response.text },
				function (response) {
				  var result = response.entities;
				  alert(JSON.stringify(result));
  
				  var textAfterNER = {
					type: 'basic',
					title: 'Text after NER',
					message: JSON.stringify(result)
				  };
  
				  chrome.notifications.create(
					'EntitiesRecognition',
					textAfterNER
				  );
				}
			  );
			}
		  }
		);
	  });
	});
  });
  