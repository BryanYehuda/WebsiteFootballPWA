const CACHE_NAME = 'football-watch';
var urlsToCache = [
	'/',
	'/manifest.json',
	'/src/nav.html',
	'/src/index.html',
	'/src/app.js',
	'/src/push.js',
	'/src/images/logo.png',
	'/src/images/logo384.png',
	'/src/images/logo256.png',
	'/src/images/logo192.png',
	'/src/images/logo144.png',
	'/src/images/logo128.png',
	'/src/images/logo96.png',
	'/src/images/logo72.png',
	'/src/images/favicon.ico',
	'/src/style/materialize.css',
	'/src/style/materialize.min.css',
	'/src/script/materialize.js',
	'/src/script/materialize.min.js',
	'/src/script/api.js',
	'/src/script/idb.js',
	'/src/script/init.js',
	'/src/script/main.js',
	'/src/script/nav.js',
	'/src/script/script.js',
	'/src/style/style.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
	'https://code.jquery.com/jquery-2.1.1.min.js'
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, {cacheName:CACHE_NAME})
		.then(function(response) {
			if(response){
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}
			
			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
			return fetch(event.request);
		})
	);
});