function menu(){
	let elem = document.getElementById("sidebar");
	let btn = document.getElementById("btn");
	if (elem.style.left=="-20%"){
		elem.style.left="0px";
		btn.style.color = "white";
	}
	else{
		elem.style.left = "-20%";
		btn.style.color = "black";
	}
}