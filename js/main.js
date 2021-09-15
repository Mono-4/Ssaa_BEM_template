"use-strict";
let s = window.location.href;
let c;
if (s.includes("index.html")) {
	c = document.querySelector(".header .menu__list:nth-of-type(1) a ");
	c.style.color = "white";
} else if (s.includes("contact.html")) {
	c = document.querySelector(".header .menu__list:nth-of-type(5) a ");
	c.style.color = "white";
} else if (s.includes("service.html") || s.includes("plan.html")) {
	c = document.querySelector(".header .menu__list:nth-of-type(2) a ");
	c.style.color = "white";
	c = document.querySelector(".header .menu__list:nth-of-type(3) a ");
	c.style.color = "white";
} else if (s.includes("works.html")) {
	c = document.querySelector(".header .menu__list:nth-of-type(4) a ");
	c.style.color = "white";
}
