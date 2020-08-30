let count = -1;
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
	document.querySelector("body > div.review > div.container > p").innerHTML = review["user"+count][0];
	document.querySelector("body > div.review > div.container > h1").innerHTML = review["user"+count][1];
	if(count==4)
		document.querySelector("body > div.review > div.controller > span:nth-child(2) > p").style.display = "none";
	document.querySelector("body > div.review > div.controller > span:nth-child(1) > p").style.display = "block"
	if(count==0)
	document.querySelector("body > div.review > div.controller > span:nth-child(1) > p").style.display = "none"
}
const left = ()=>{
	count--;
	document.querySelector("body > div.review > div.container > p").innerHTML = review["user"+count][0];
	document.querySelector("body > div.review > div.container > h1").innerHTML = review["user"+count][1];
	document.querySelector("body > div.review > div.controller > span:nth-child(2) > p").style.display = "block";
	if(count==0)
		document.querySelector("body > div.review > div.controller > span:nth-child(1) > p").style.display = "none"
}