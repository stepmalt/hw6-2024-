var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log('auto play is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop);

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();

});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Changed");

	video.volume = this.value / 100;

	document.querySelector("#volume").textContent = `${video.volume * 100}%`;

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed decreased to " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed increased to " + video.playbackRate.toFixed(5));




});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Video restarted");
	} else {
		video.currentTime += 10;
		console.log("Video skipped 10 seconds to " + video.currentTime.toFixed(5));
	}




});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		this.textContent = "Unmute";
	}
	else {
		this.textContent = "Mute";
	}


});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school filter added");


});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Reverted to original filter");


});



});
