let count = -1;
let marker1 = document.querySelector("#main > div.contact > div.marker");
let initContact = document.querySelector('#main > div.contact > div.con');
const review = {
	"user0" : [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		"~Ankit Podder"
	],
	"user1" : [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		"~Riddhi Sen"
	],
	"user2" : [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		"~Anil Sen"
	],
	"user3" : [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		"~Riju Das"
	],
	"user4" : [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		"~Isheeta Sen"
	]
}

const right = ()=>{
	count++;
	document.querySelector("#main > div.review > div.container > p").innerHTML = review["user"+count][0];
	document.querySelector("#main > div.review > div.container > h1").innerHTML = review["user"+count][1];
	if(count==4)
		document.querySelector("#main > div.review > div.controller > span:nth-child(2) > p").style.opacity = "0.5";
	document.querySelector("#main > div.review > div.controller > span:nth-child(1) > p").style.opacity = "1"
	if(count==0)
	document.querySelector("#main > div.review > div.controller > span:nth-child(1) > p").style.opacity = "0.5"
}
const left = ()=>{
	count--;
	document.querySelector("#main > div.review > div.container > p").innerHTML = review["user"+count][0];
	document.querySelector("#main > div.review > div.container > h1").innerHTML = review["user"+count][1];
	document.querySelector("#main > div.review > div.controller > span:nth-child(2) > p").style.opacity = "1";
	if(count==0)
		document.querySelector("#main > div.review > div.controller > span:nth-child(1) > p").style.opacity = "0.5"
}

const checkContact = e =>{
	$("#main > div.contact > div").removeClass("active");
	marker1.style.width = e.offsetWidth + "px";
	marker1.style.height = e.offsetHeight + "px";
	marker1.style.top = e.offsetTop + "px";
	marker1.style.left = e.offsetLeft + "px";
	e.classList.add("active");
}

const checkContactOut = ()=>{
	checkContact(initContact);
}