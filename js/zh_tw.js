function showLoginBox() {
  var login = document.getElementById('login-link');
  var register = document.getElementById('register-link');
  if(login.style.display == "block"){
    login.style.display = "none";
  } else {
    login.style.display = "block";
    register.style.display = "none";
  }
}
function showRegisterBox() {
  var register = document.getElementById('register-link');
  var login = document.getElementById('login-link');
  if(register.style.display == "block"){
    register.style.display = "none";
  } else {
    register.style.display = "block";
    login.style.display = "none";
  }
}
