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

    let reg_name = $('#reg_name');
		let reg_email = $('#reg_email');
		let reg_nickname = $('#reg_nickname');
		let reg_password = $('#reg_password');
		let re_reg_password = $('#re_reg_password');

		if(reg_password.val() === re_reg_password.val()) {
      let name = reg_name.val();
			let email = reg_email.val();
			let password = reg_password.val();
      let nickname = reg_nickname.val();

			/**
			  connect firebase create user
			  */
			auth.createUserWithEmailAndPassword(email, password)
			.then((o) => {
        database.ref('users/' + auth.currentUser.uid).set({
          name: name,
          nickname: nickname,
          email: email,
        });
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
    reg_name.val('');
		reg_email.val('');
		reg_nickname.val('');
		reg_password.val('');
		re_reg_password.val('');
	})

	/**
	  sign in button
	  */
	$("#signin").submit(function(event) {
		event.preventDefault();
		document.getElementById("login-err").innerHTML = '';
		let userid = $('#login_email');
		let pwd = $('#login_password');
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
})
