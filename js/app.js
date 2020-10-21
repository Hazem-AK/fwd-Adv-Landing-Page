// get navbar, header and all sections
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const pageHeader = document.querySelector("header");

// hide nav-bar when not scrolling
let timer = null;
document.addEventListener(
	"scroll",
	() => {
		pageHeader.style.opacity = 1;
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			// make sure nav-bar stays visible when at top of the page
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				pageHeader.style.opacity = 0;
			}
		}, 750);
	},
	false
);

// make pageHeader (nab-bar) visible on mouseover and hide on mouseout
pageHeader.addEventListener("mouseover", () => {
	pageHeader.style.opacity = 1;
});
pageHeader.addEventListener("mouseout", () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		pageHeader.style.opacity = 0;
	}
});

// building the menu
const fragment = document.createDocumentFragment();
sections.forEach((section) => {
	const liToAppend = document.createElement("li");
	const anchorTagToAppend = document.createElement("a");

	anchorTagToAppend.setAttribute("id", `link${section.id}`);
	anchorTagToAppend.classList.add("menu__link");
	anchorTagToAppend.innerText = section.dataset.nav;
	// add function call to each link with changing parameter
	anchorTagToAppend.setAttribute("onclick", `scrollToSection("${section.id}")`);

	liToAppend.appendChild(anchorTagToAppend);
	fragment.appendChild(liToAppend);
});
navbar.appendChild(fragment);

// set section 1 as active per default
navbar.querySelector("a").classList.add("active");
sections[0].classList.add("your-active-class");

// scroll function
const scrollToSection = (sectionId) => {
	const sectionToScrollTo = document.getElementById(sectionId);
	sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
};

// select all anchors
const navbarLinks = Array.from(navbar.querySelectorAll("a"));

// IntersectionObserver callback-function
const setActiveState = (entries) => {
	entries.forEach((entry) => {
		// make sure callback doesn't get fired uncontrolled
		if (entry.intersectionRatio >= 1) {
			// get active link
			const activeLink = navbarLinks.find((link) => {
				return link.id === `link${entry.target.id}`;
			});
			// remove active state from all links
			navbarLinks.forEach((link) => {
				link.classList.remove("active");
			});
			// add active state to activeLink
			activeLink.classList.add("active");
			// remove active-class from all sections
			sections.forEach((section) => {
				section.classList.remove("your-active-class");
			});
			// add active class to current section
			entry.target.classList.add("your-active-class");
		}
	});
};

// IntersectionObserver options
const options = {
	rootMargin: "0px",
	threshold: 1,
};

const observer = new IntersectionObserver(setActiveState, options);
sections.forEach((section) => {
	observer.observe(section);
});

// button and logic for "back to top"
const button = document.querySelector("button");
window.onscroll = function () {
	scrollFunction();
};

const scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
