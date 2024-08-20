import browser from "webextension-polyfill";
import { TranslationData } from "./background";

console.log("Hello from the popup!", { id: browser.runtime.id });

chrome.storage.local.get("newKeyword", (data) => {
  console.log(`Data from storage: ${data.newKeyword}`);
  const wordElement = document.getElementById("word") as HTMLElement;
  const norecordElement = document.getElementById("norecord") as HTMLElement;
  norecordElement.style.display = data.newKeyword ? "none" : "block";
  wordElement.style.display = data.newKeyword ? "block" : "none";
  const newKeyword = data.newKeyword as TranslationData;
  wordElement.textContent = newKeyword? `${newKeyword.text} -> ${newKeyword.translation}`: "";
});