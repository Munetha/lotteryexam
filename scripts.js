function choose() {
	let random = Math.floor(Math.random() * (10000 - 1000)) + 1000;
	document.getElementById("value").value = random;
	console.log(random)
	document.querySelector("body").style.backgroundColor = "red";
	document.getElementById("popup").innerHTML = random;

}