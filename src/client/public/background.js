
chrome.tabs.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "getActiveTabUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        sendResponse({ url: activeTab.url });
      } else {
        sendResponse({ url: "No active tab found" });
      }
    });
    return true; // Important: keep the message channel open
  }
});
