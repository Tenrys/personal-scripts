// ==UserScript==
// @name         Ctrl+K to Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Bell#1234 on Discord
// @match        *://warframe.fandom.com/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", evt => {
  if (evt.key == "k" && evt.ctrlKey) {
    const search = document.querySelector("a.wiki-tools__search");
    if (search) {
      search.click();
    }
    evt.preventDefault();
  }
});
