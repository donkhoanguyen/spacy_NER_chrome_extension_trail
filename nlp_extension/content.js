
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
});

/* chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'extractText') {
    var textOnPage = document.body.innerText;
    sendResponse({ text: textOnPage });
  }
}); */