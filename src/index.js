const inputField = document.querySelector("#inputField");
const xMark = document.querySelector("#xMark");
const searchBtn = document.querySelector("#searchBtn");
const darkModeSettings = document.querySelector("#darkModeSettings");
const darkModeBtn = document.querySelector("#darkModeBtn");
const settingBtn = document.querySelector("#settingBtn");

darkModeSettings.style.display = "none";

settingBtn.addEventListener("click", function () {
	var status = darkModeSettings.style.display;

	if (status == "none") {
		darkModeSettings.style.display = "block";
	} else {
		darkModeSettings.style.display = "none";
	}
});

darkModeBtn.addEventListener("click", function () {
	var mode = darkModeSettings.dataset.mode;

	if (mode == "Off") {
		darkModeBtn.innerHTML = 'Dark Mode: On <i class="fa-solid fa-toggle-on"></i>';
		darkModeSettings.setAttribute("data-mode", "On");
	} else if (mode == "On") {
		darkModeBtn.innerHTML = 'Dark Mode: Off <i class="fa-solid fa-toggle-off"></i>';
		darkModeSettings.setAttribute("data-mode", "Off");
	}
});

function showXMark() {
	var length = inputField.value.length;

	if (length > 0) {
		xMark.style.opacity = "1";
		xMark.style.cursor = "pointer";
	} else {
		xMark.style.opacity = "0";
		xMark.style.cursor = "default";
	}
}

setInterval(showXMark, 100);

xMark.addEventListener("click", function () {
	inputField.value = "";
});

function searchQuery() {
	// var inputText = inputField.value.replace(/ /g, "+").toLowerCase();
	const searchUrl = `https://www.google.com/search?q=${(inputField.value)}`;
	window.location.href = searchUrl;
	// window.open(URL, "_blank");
}

searchBtn.addEventListener("click", function () {
	if(inputField.value.trim(" ").length < 1){
		return;
	}
	searchQuery();
});

inputField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		searchQuery();
	}
});

// LIGHT MODE

function lightMode() {
	document.querySelector("body").style.backgroundColor = "var(--background-LM)";
	document.querySelector("*").style.color = "var(--main-text-mode-LM)";
	document.querySelector(".fa-bars").style.backgroundColor = "var(--main-text-mode-LM)";
	document.querySelector("#inputField").style.backgroundColor = "var(--input-bg-LM)";

	// Loops
	var leftNavLinks = document.querySelectorAll("#left-nav a");
	for (var i = 0; i < leftNavLinks.length; i++) {
		leftNavLinks[i].style.color = "var(--text-mode-2-LM)";
	}

	// Functions
	document.getElementById("menuBars").addEventListener("mouseout", function () {
		menuBars.style.backgroundColor = ""; // Reset color when mouse leaves
	});

	var inputField = document.querySelector("#inputField");

	inputField.addEventListener("focus", function () {
		inputField.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(
			"--button-bg-DM"
		);
		inputField.style.outline = "none";
		inputField.style.border = "1px solid #bebebe00";
		inputField.style.boxShadow = getComputedStyle(document.documentElement).getPropertyValue(
			"--input-shadow-DM"
		);
	});

	inputField.addEventListener("blur", function () {
		inputField.style.backgroundColor = "transparent";
		inputField.style.border = "1px solid #bebebe";
		inputField.style.boxShadow = "none";
	});
}
