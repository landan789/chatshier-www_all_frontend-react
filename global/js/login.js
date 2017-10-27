/**
  file name: login.js
  purpose: let client to sign up/in an account
  */
 const msg = {
 	pwd_not_match: "Passwords not match",
 	login_fail: "Incorrect username or password."
 };

$(document).ready(function() {
	/**
	  sign up button
	  */
	$('#signup').submit(function(event) {
		event.preventDefault();
		document.getElementById("register-err").innerHTML = "";

		let email = $('#email');
		let reg_userid = $('#reg_userid');
		let reg_password = $('#reg_password');
		let re_reg_password = $('#re_reg_password');

		if(reg_password.val() === re_reg_password.val()) {
			let email_v = email.val();
			let password = reg_password.val();

			/**
			  connect firebase create user
			  */
			auth.createUserWithEmailAndPassword(email_v, password)
			.then((o) => {
				$("#myModal").modal('hide');
			}).catch(function(error) {
				let errorCode = error.code;
				let errorMessage = error.message;

				$("#register-err").html(errorMessage).addClass('red');
			});

		} else {
			$("#register-err").html(msg.pwd_not_match).addClass('red');
		}

		/**
		  clear input text area
		  */
		email.val('');
		reg_userid.val('');
		reg_password.val('');
		re_reg_password.val('');
	})

	/**
	  sign in button
	  */
	$("#signin").submit(function(event) {
		event.preventDefault();
		document.getElementById("login-err").innerHTML = '';
		let userid = $('#userid');
		let pwd = $('#password');

		let user = userid.val();
		let password = pwd.val();
		auth.signInWithEmailAndPassword(user, password)
		.then((o) => {
			window.location.href = './global.html';
		}).catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// console.log(errorCode);

			$("#login-err").html(msg.login_fail).addClass('red');

			userid.val("");
			pwd.val("");
		});

	})

	auth.onAuthStateChanged(user => {
    if(user){
      //window.location.replace('http://fea-chatshier.com:3000');
			console.log('sign in');
    } else {
      console.log('need to sign in');
    }
  });

})
