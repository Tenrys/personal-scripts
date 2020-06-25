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
	const fixed = document.querySelector(".repohead .container-xl");
	if (fixed) return;
	const repohead = document.querySelector(".repohead");
	const containerXl = document.createElement("div");
	containerXl.className = "container-xl";
	while (repohead.childNodes.length > 0) {
		containerXl.appendChild(repohead.childNodes[0]);
	}
	repohead.appendChild(containerXl);

	const underlineNav = document.querySelector(".repohead .UnderlineNav");
	underlineNav.style = "overflow: visible !important";
	const underlineNavOverflow = document.querySelector(
		".repohead .UnderlineNav [class*='underlinenav-overflow']"
	);
	underlineNavOverflow.style =
		"position: relative !important; padding-right: 0 !important;";
}
fixNavbar();
setInterval(fixNavbar, 0);
