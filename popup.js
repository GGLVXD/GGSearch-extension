document.getElementById('searchButton').addEventListener('click', function() {
  var query = document.getElementById('searchQuery').value;
  if (query) {
    var searchUrl = 'https://ggsearch.eu.org/search?q=' + encodeURIComponent(query);
    chrome.tabs.create({ url: searchUrl });
  }
});

document.getElementById('searchQuery').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    var query = document.getElementById('searchQuery').value;
    if (query) {
      var searchUrl = 'https://ggsearch.eu.org/search?q=' + encodeURIComponent(query);
      chrome.tabs.create({ url: searchUrl });
    }
  }
});
