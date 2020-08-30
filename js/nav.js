const marker = document.querySelector("body > nav > ul:nth-child(2) > div");
const nav    = document.querySelector("body > nav");
const main   = document.querySelector("#main");
const mouseover = (e) =>{
	marker.style.width = e.offsetWidth + "px";
	marker.style.left = e.offsetLeft + "px";
}
const mouseout = (e) =>{
	marker.style.width = e.offsetWidth + "px";
	marker.style.left = e.offsetLeft + "px";
}

const checkNav = ()=>{
	if( window.scrollY>=250)
		nav.classList.add("active");
	else
		nav.classList.remove("active");
}

window.addEventListener("scroll",checkNav);

const handburger = e =>{
	e.classList.toggle("active");
	main.classList.toggle("active");
	nav.classList.toggle("activeSlide");
	document.querySelector("body > nav > ul:nth-child(2)").classList.toggle("active");
}