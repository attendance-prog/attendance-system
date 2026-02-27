const API = "https://script.google.com/macros/s/AKfycbwV_SjR5wASHwKWjWd-fLlVFFWbc-pGAUUVXcYlEOUbH1JeUnwILr-nMhPvHWLoUW19BQ/exec";

function post(data){
  return fetch(API,{
    method:"POST",
    headers:{"Content-Type":"text/plain"},
    body:JSON.stringify(data)
  }).then(res => res.json());
}
