import browser from "webextension-polyfill";
import { TranslationData } from "./background";

console.log("Hello from the popup!", { id: browser.runtime.id });

const button = document.getElementById("new-page") as HTMLElement
button.onclick = () => {
  chrome.runtime.sendMessage({ type: "open-tab" });
};

chrome.storage.local.get("newKeyword", (data) => {
  console.log(`Data from storage: ${data.newKeyword}`);
  if (!data.hasOwnProperty("newKeyword")) return;
  const newKeyword = data.newKeyword as TranslationData;
  const highlightedTextElement = document.getElementById("highlightedText") as HTMLElement;
  highlightedTextElement.textContent = `${newKeyword.text} -> ${newKeyword.translation}`;
});

console.log(`window storage: ${window.localStorage.getItem("newKeyword")}`);