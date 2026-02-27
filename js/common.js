function protectPage(expectedRole){

  const role = localStorage.getItem("role");

  if(role !== expectedRole){
    alert("Unauthorized Access");
    window.location.href = "index.html";
  }
}

function logout(){
  localStorage.clear();
  window.location.href = "index.html";
}
