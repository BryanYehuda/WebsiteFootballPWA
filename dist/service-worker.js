const CACHE_NAME = 'football-watch';
var urlsToCache = [
	'/',
	'/manifest.json',
	'/package.json',
	'/package-lock.json',
	'/webpack.common.js',
	'/webpack.dev.js',
	'/webpack.prod.js',
	'/src/nav.html',
	'/src/index.html',
	'/src/app.js',
	'/dist/images/logo.png',
	'/dist/images/logo384.png',
	'/dist/images/logo256.png',
	'/dist/images/logo192.png',
	'/dist/images/logo144.png',
	'/dist/images/logo128.png',
	'/dist/images/logo96.png',
	'/dist/images/logo72.png',
	'/dist/images/favicon.ico',
	'/dist/style/materialize.css',
	'/dist/style/materialize.min.css',
	'/dist/script/materialize.js',
	'/dist/script/materialize.min.js',
	'/dist/bundle.js',
	'/dist/index.html',
	'/dist/nav.html',
	'/dist/script/api.js',
	'/dist/script/idb.js',
	'/dist/script/init.js',
	'/dist/script/main.js',
	'/dist/script/nav.js',
	'/dist/script/script.js',
	'/src/index.html',
	'/src/nav.html',
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