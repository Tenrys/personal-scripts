// ==UserScript==
// @name         GitHub Repository Navbar
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Fix repository navbar for the new design
// @author       Tenrys
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

function fixNavbar() {
	if (!document.querySelector(".js-repo-nav")) return;
	const fixed = document.querySelector("main div .container-xl");
	if (fixed) return;
	const repohead = document.querySelector("main div");
	const containerXl = document.createElement("div");
	containerXl.className = "container-xl";
	while (repohead.childNodes.length > 0) {
		containerXl.appendChild(repohead.childNodes[0]);
	}
	repohead.appendChild(containerXl);

	const underlineNav = document.querySelector("main div .UnderlineNav");
	underlineNav.style = "overflow: visible !important";
	const underlineNavOverflow = document.querySelector(
		"main div .UnderlineNav [class*='underlinenav-overflow']"
	);
	underlineNavOverflow.style =
		"position: relative !important; padding-right: 0 !important;";
}
setInterval(fixNavbar, 0);
