function showLoginBox() {
  var login = document.getElementById('login-link');
  var register = document.getElementById('register-link');
  var account = document.getElementById('account-link');
  if(login.style.display == "block"){
    login.style.display = "none";
  } else {
    login.style.display = "block";
    register.style.display = "none";
    account.style.display = "none";
  }
}
function showRegisterBox() {
  var register = document.getElementById('register-link');
  var login = document.getElementById('login-link');
  var account = document.getElementById('account-link');
  if(register.style.display == "block"){
    register.style.display = "none";
  } else {
    register.style.display = "block";
    login.style.display = "none";
    account.style.display = "none";
  }
}
function showAccountBox() {
  var register = document.getElementById('register-link');
  var login = document.getElementById('login-link');
  var account = document.getElementById('account-link');
  if(account.style.display == "block"){
    account.style.display = "none";
  } else {
    register.style.display = "none";
    login.style.display = "none";
    account.style.display = "block";
  }
}
