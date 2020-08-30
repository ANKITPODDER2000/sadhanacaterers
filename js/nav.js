const marker = document.querySelector("body > nav > ul:nth-child(2) > div");
const nav    = document.querySelector("body > nav");
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