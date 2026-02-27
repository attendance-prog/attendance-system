
function redirectByRole(role){

  if(role === "admin"){
    window.location.href = "admin.html";
  }

  if(role === "hod"){
    window.location.href = "hod.html";
  }

  if(role === "faculty"){
    window.location.href = "faculty.html";
  }

  if(role === "coordinator"){
    window.location.href = "coordinator.html";
  }

  if(role === "student"){
    window.location.href = "student.html";
  }
}
