chrome.contextMenus.create({
    id: "searchGoogleImages",
    title: "Search Google Images",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchGoogleImages") {
      const query = encodeURIComponent(info.selectionText);
      const searchUrl = `https://www.google.com/search?tbm=isch&q=${query}`;
      chrome.tabs.create({ url: searchUrl });
    }
  });
  