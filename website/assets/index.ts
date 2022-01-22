import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"
import AdsPlugin from "./plugins/Ads"

const video = document.querySelector("video")
const playButton: HTMLElement = document.getElementById("play")
const muteButton: HTMLElement = document.getElementById("mute")

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
})
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

if ("serviceWorker" in navigator) {
	console.log("registered")
	navigator.serviceWorker.register("/sw.js").catch((err) => console.log(err))
}
