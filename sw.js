const CACHE_NAME = "gogreen-v1";

const urlsToCache = [
  "student.html",
  "student-attendance.html",
  "student-marks.html",
  "student-timetable.html",
  "student-profile.html",
  "student-qr.html",
  "student-calendar.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
