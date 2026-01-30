alert("script.js loaded");
const API = "https://script.google.com/macros/s/AKfycbwV_SjR5wASHwKWjWd-fLlVFFWbc-pGAUUVXcYlEOUbH1JeUnwILr-nMhPvHWLoUW19BQ/exec";

function sendOTP() {
  console.log("sendOTP function called");

  const emailEl = document.getElementById("email");
  if (!emailEl) {
    alert("Email input not found");
    return;
  }

  const email = emailEl.value;
  console.log("Email:", email);

  if (!email) {
    alert("Please enter email");
    return;
  }

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "sendOTP",
      email: email
    })
  })
  .then(res => {
    console.log("Fetch response received");
    return res.json();
  })
  .then(data => {
    console.log("API data:", data);
    alert(JSON.stringify(data));
  })
  .catch(err => {
    console.error("Fetch failed:", err);
    alert("Fetch failed");
  });
}
