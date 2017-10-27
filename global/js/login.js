$(document).ready(function() {
	// signup button
	$('#signup').submit(function(event) {
		event.preventDefault();

		let email = $('#email');
		let reg_userid = $('#reg_userid');
		let reg_password = $('#reg_password');
		let re_reg_password = $('#re_reg_password');

		// if(email.val() === "a") {
		// 	document.getElementById("register-err").innerHTML = '<span style="color:red">email has been registered</span>';
		// } else if(reg_userid.val() === "b") {
		// 	document.getElementById("register-err").innerHTML = '<span style="color:red">username has been registered</span>';
		// } else if(reg_password.val().length < 8) {
		// 	document.getElementById("register-err").innerHTML = '<span style="color:red">password is too short</span>';
		// } else if(reg_password.val() !== re_reg_password.val()) {
		// 	document.getElementById("register-err").innerHTML = '<span style="color:red">password not match</span>';
		// } else {
		//
		// }

		auth.createUserWithEmailAndPassword(email.val(), reg_password.val()).then(() => {
      database.ref('users/' + auth.currentUser.uid).set({
        email: email.val()
      });
    }).catch(error => {
      showError(error.message);
    });



		email.val('');
		reg_userid.val('');
		reg_password.val('');
		re_reg_password.val('');

	})

	// signin button
	$("#signin").submit(function(event) {
		event.preventDefault();

		let userid = $('#userid').val();
		let password = $('#password').val();
		auth.signInWithEmailAndPassword(userid, password).then(response => {}).catch(error => {
	   console.log(error.message);
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
