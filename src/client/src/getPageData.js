/* global chrome */

//this method works confirmed!!!
export async function getActiveTab(){
  let queryOptions = { active:true, lastFocusedWindow:true};
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}

//works but only get the head of the
export async function getTabsInfo() {
  // Get the currently active tab in the last focused window.
  let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

  function getPageContent() {
    // This function runs on the web page itself.
    // It has access to the page's DOM.
    return document.body.innerText;
  }

  // Execute the `getPageContent` function on the active tab.
  const injectionResults = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // You pass the function object itself, not a string name.
    function: getPageContent,
  });

  // The result is an array of objects. We get the result from the first one.
  return injectionResults[0].result;
}

// Expose the function globally so your React app can call it.
window.getActiveTabContent = getTabsInfo;