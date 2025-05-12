self.addEventListener("install", (event) => {
  console.log("Service Worker installed.");
});

self.addEventListener("fetch", (event) => {
  // Tidak bisa meng-intercept request ke domain luar
});
