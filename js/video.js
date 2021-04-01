var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume=document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	let time = video.currentTime + 15;
	if (time > video.duration) {
		video.currentTime = 0;
		video.play();
		console.log("Going back to beginning");
	} else {
		video.currentTime += 15;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted=false;
		document.getElementById("mute").innerHTML="Mute"
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	document.getElementById("player1").volume = this.value / 100;
	console.log((this.value)/100);
	volume=document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});