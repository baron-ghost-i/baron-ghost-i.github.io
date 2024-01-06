function menu(){
	let elem = document.getElementById("sidebar");
	let btn = document.getElementById("btn");
	let overlay = document.getElementById("overlay");
	let night = document.getElementsByTagName("body")[0].style.backgroundColor == "rgb(32, 32, 32)";
	if (elem.style.left=="-20vw"){
		elem.style.left="0px";
		btn.style.color = "white";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	}
	else{
		elem.style.left = "-20vw";
		if(!night){
			btn.style.color = "black";
		}
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}

function togglenight(){
	let btn = document.getElementById("btn");
	let body = document.getElementsByTagName("body")[0];
	if(body.style.backgroundColor=="rgb(32, 32, 32)"){
		body.style.backgroundColor="white";
		body.style.color = "black";
	}
	else{
		body.style.backgroundColor="rgb(32, 32, 32)";
		body.style.color="white";
	}
}