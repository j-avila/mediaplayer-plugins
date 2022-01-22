const VERSION = "v1"
self.addEventListener("install", (event) => {
	event.waitUntil(preCache())
})

self.addEventListener("fetch", (event) => {
	const request = event.request

	if (request.method !== "GET") {
		return
	}

	event.respondWith(cachedResponse(request))
})

async function preCache() {
	const cache = await caches.open(VERSION)

	return cache.addAll([
		// "/",
		// "/index.html",
		// "/assets/index.js",
		// "/assets/MediaPlayer.js",
		// "/assets/plugins/AutoPlay.js",
		// "/assets/plugins/AutoPause.js",
		// "/assets/index.css",
		// "/assets/BigBuckBunny.mp4",
	])
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION)
	const response = await cache.match(request)
	return response || fetch(request)
}
