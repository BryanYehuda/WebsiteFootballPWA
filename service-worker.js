const CACHE_NAME = 'Football-Watch';
var urlsToCache = [
	'/',
	'/manifest.json',
	'/nav.html',
	'/index.html',
	'/pages/teams.html',
	'/pages/standings.html',
	'/pages/favorites.html',
	'/css/style.css',
	'/css/materialize.css',
	'/css/materialize.min.css',
	'/js/materialize.js',
	'/js/script.js',
	'/js/init.js',
	'/js/nav.js',
	'/images/logo.png',
	'/images/logo384.png',
	'/images/logo256.png',
	'/images/logo192.png',
	'/images/logo144.png',
	'/images/logo128.png',
	'/images/logo96.png',
	'/images/logo72.png',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
	'https://code.jquery.com/jquery-2.1.1.min.js',
	'/images/favicon.ico'
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

