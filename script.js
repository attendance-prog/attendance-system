const API = "https://script.google.com/macros/s/AKfycbwV_SjR5wASHwKWjWd-fLlVFFWbc-pGAUUVXcYlEOUbH1JeUnwILr-nMhPvHWLoUW19BQ/exec";

/* SEND OTP */
function sendOTP() {
  localStorage.setItem("email", email.value);

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "sendOTP",
      email: email.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.status === "blocked") {
      alert("Unauthorized Email Domain");
    } else {
      location.href = "verify.html";
    }
  });
}

/* VERIFY OTP */
function verifyOTP() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "verifyOTP",
      email: localStorage.getItem("email"),
      otp: otp.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.status === "success") {
      localStorage.setItem("user", JSON.stringify(d));
      location.href = d.role + ".html";
    } else {
      alert("Invalid OTP");
    }
  });
}
