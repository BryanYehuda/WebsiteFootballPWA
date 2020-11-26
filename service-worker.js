const CACHE_NAME = 'football-watch';
const urlsToCache = [
	'/',
	'/manifest.json',
	'/nav.html',
	'/index.html',
	'/push.js',
	'/images/logo.png',
	'/images/logo384.png',
	'/images/logo256.png',
	'/images/logo192.png',
	'/images/logo144.png',
	'/images/logo128.png',
	'/images/logo96.png',
	'/images/logo72.png',
	'/images/favicon.ico',
	'/style/materialize.css',
	'/style/materialize.min.css',
	'/script/materialize.js',
	'/script/materialize.min.js',
	'/script/api.js',
	'/script/idb.js',
	'/script/init.js',
	'/script/main.js',
	'/script/nav.js',
	'/script/script.js',
	'/script/uint.js',
	'/style/style.css',
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

self.addEventListener("fetch", event => {
    const base_url = "https://api.football-data.org/v2/";

    if(event.request.url.indexOf(base_url) > -1){
        event.respondWith(
            caches.open(CACHE_NAME)
            .then(cache => {
                return fetch(event.request)
                .then(respon => {
                    cache.put(event.request.url, respon.clone());
                    return respon;
                })
            })
        );
    } else{
      event.respondWith(
        caches.match(event.request, {ignoreSearch: true})
            .then( response => {
                return response || fetch(event.request);
            })
        )
    }
});

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if(cacheName != CACHE_NAME ){
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'images/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
