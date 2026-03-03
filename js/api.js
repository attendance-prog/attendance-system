const API = "https://script.google.com/macros/s/AKfycbwV_SjR5wASHwKWjWd-fLlVFFWbc-pGAUUVXcYlEOUbH1JeUnwILr-nMhPvHWLoUW19BQ/exec";

function post(data){
  return fetch(API,{
    method:"POST",
    headers:{"Content-Type":"text/plain"},
    body:JSON.stringify(data)
  }).then(res => res.json());
}
async function callAPI(action, payload = {}) {
  const response = await fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify({
      action: action,
      ...payload
    })
  });

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
