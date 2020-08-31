let ead = [1,2,5,3,4,6,8,9,10,11,12,25,15,16,17,18,19,20,22,23,24,21,14,13];
let len = ead.length;
let count;

$(".column img").click(function(){
  $("body > div.img-show > img").attr("src", $(this).attr("src"));
  let val_dot = $(this).attr("src").slice(2,50).indexOf(".") + 2;
  let val_g   = $(this).attr("src").slice(12,50).indexOf("g") + 12;
  console.log(val_g);
  console.log(val_dot);
  count = Number($(this).attr("src").slice(val_g+1 , val_dot));
  console.log($(this).attr("src"));
  count = ead.indexOf(count);
  $("body > div.img-show").addClass("active");
  document.querySelector("body > div.img-show.active > div.left > i").style.opacity = "1";
  document.querySelector("body > div.img-show.active > div.right > i").style.opacity = "1";
});

const right = () => {
	console.log(count);
  	if(count+1==len)
  	{
  		return 0;
  	}
  	else{
  		count++;
  		document.querySelector("body > div.img-show.active > div.left > i").style.opacity = "1";
  		let str = "./imagegallery/img"+ead[count]+".jpg";
  		$("body > div.img-show > img").attr("src", str);
  		if(count+1 == len){
  			document.querySelector("body > div.img-show.active > div.right > i").style.opacity = "0.5";
  		}
  	}

}
const left = () => {
	console.log(count);
	console.log(count);
  	if(count==0)
  	{
  		return 0;
  	}
  	else{
  		count--;
  		document.querySelector("body > div.img-show.active > div.right > i").style.opacity = "1";
  		let str = "./imagegallery/img"+ead[count]+".jpg";
  		$("body > div.img-show > img").attr("src", str);
  		if(count == 0){
  			document.querySelector("body > div.img-show.active > div.left > i").style.opacity = "0.5";
  		}
  	}

}
$(".fa-times-circle").click(()=>{
      $("body > div.img-show").removeClass("active");
  })