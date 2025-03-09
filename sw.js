self.addEventListener("install", event => {
    console.log("Service Worker Installé !");
});

self.addEventListener("fetch", event => {
    console.log("Chargement de :", event.request.url);
});