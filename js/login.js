/**
  file name: login.js
  purpose: let client to sign up/in an account
  */
const msg = {
  pwd_not_match: "Passwords not match",
  login_fail: "Incorrect username or password."
};
$(document).ready(function() {
  $('#signup').click(function(event) {
    event.preventDefault();
    $('#signup-err').text('');
    let reg_name = $('#signup-name');
    let reg_email = $('#signup-email');
    let reg_password = $('#signup-password');
    let re_reg_password = $('#signup-password-confirm');
    if(reg_password.val() === re_reg_password.val()) {
      let name = reg_name.val();
      let email = reg_email.val();
      let password = reg_password.val();
      auth.createUserWithEmailAndPassword(email, password).then(() => {
        database.ref('users/' + auth.currentUser.uid).set({
          name: name,
          nickname: name,
          email: email,
        });
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 2000);
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        $("#register-err").html(errorMessage).addClass('red');
      });
    } else {
      $("#register-err").html(msg.pwd_not_match).addClass('red');
    }
    reg_name.val('');
    reg_email.val('');
    reg_password.val('');
    re_reg_password.val('');
  });
  $("#signin").click(function(event) {
    event.preventDefault();
    document.getElementById("login-err").innerText = '';
    let userid = $('#signin-email');
    let pwd = $('#signin-password');
    let user = userid.val();
    let password = pwd.val();
    auth.signInWithEmailAndPassword(user, password).then((o) => {
      window.location.href = 'index.html';
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      $("#login-err").html(msg.login_fail).addClass('red');
      userid.val("");
      pwd.val("");
    });
  });
});
