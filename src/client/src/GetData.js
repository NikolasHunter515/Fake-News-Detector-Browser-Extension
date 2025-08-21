/* global chrome */

import React from "react";
import { useEffect, useState } from "react";
import { getActiveTab, getTabsInfo } from "./getPageData";

//TODO turn into regular js file with methods that returns current url and 
export default function GetData(){
    const [tabUrl, setTabUrl] = useState('');

  useEffect(() => {
    setTabUrl(getActiveTab());
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Active Tab URL:</h2>
      <p>{tabUrl || "Loading..."}</p>
    </div>
  );
}

//not used
function scrapeUrl() {
  return new Promise((resolve, reject) => {
    if (chrome && chrome.runtime) {
      chrome.runtime.sendMessage({ type: 'GET_TAB_URL' }, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError.message);
        } else if (response?.url) {
          resolve(response.url);
        } else {
          reject('No response or URL');
        }
      });
    } else {
      reject('Chrome runtime API not available');
    }
  });
}

/*async function getActiveTab(){
  let queryOptions = { active:true, lastFocusedWindow:true};
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}*/

