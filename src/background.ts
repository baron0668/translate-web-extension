import { runtime } from "webextension-polyfill";
import { fetchTranslation } from "./apiService";

export type TranslationData = {
  text: string;
  translation: string;
};

console.log("Hello from the background!");

chrome.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);

  console.log("create menu item");

  chrome.contextMenus.create({
    title: "Translate",
    contexts: ["selection"],
    id: "translate",
  });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  console.log(`item clicked: ${item.menuItemId}, selected text:${item.selectionText}`);
  if (item.menuItemId !== "translate" || item.selectionText == undefined) return;
  console.log(`update storage`);
  // fetch translation
  const keyword = item.selectionText;
  fetchTranslation(keyword).then((resData) => {
    const data: TranslationData = {
      text: keyword,
      translation: resData,
    };
    chrome.storage.local.set({ newKeyword: data }, () => {
      console.log("Storage updated");
      chrome.action.openPopup();
    });
  });
});

runtime.onMessage.addListener((message) => {
  if (message.type !== "open-tab") return;
  console.log("Received message:", message);
  //chrome.tabs.create({ url: '/index.html' });
});