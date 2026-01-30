const API = "https://script.google.com/macros/s/AKfycbwV_SjR5wASHwKWjWd-fLlVFFWbc-pGAUUVXcYlEOUbH1JeUnwILr-nMhPvHWLoUW19BQ/exec";
/* SEND OTP */
function sendOTP() {
  const email = emailInput("email");
  const role = emailInput("role");

  localStorage.setItem("email", email);
  localStorage.setItem("role", role);

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "sendOTP",
      email: email,
      role: role
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.status === "sent") location.href = "verify.html";
    else alert(JSON.stringify(d));
  })
  .catch(() => alert("Fetch failed"));
}

/* VERIFY OTP */
function verifyOTP() {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "verifyOTP",
      email: localStorage.getItem("email"),
      role: localStorage.getItem("role"),
      otp: otp.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.status === "success") {
      localStorage.setItem("user", JSON.stringify(d));
      location.href = d.role + ".html";
    } else {
      alert("Login denied: " + d.status);
    }
  });
}

/* HELPER */
function emailInput(id) {
  const v = document.getElementById(id).value;
  if (!v) throw "Missing field";
  return v;
}
