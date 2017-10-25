// firebase write push, set

var ref = firebase.database().ref("users/");

// event type: value
ref.on("value", function(snapshot) {
		// let snap = snapshot.val();
		snapshot.forEach(function(childSnapshot) {
		   console.log(childSnapshot.key);
		});
	}, function (error) {
   		console.log("Error: " + error.code);
	});

$(document).ready(function() {
	// signup button
	$('#signup').submit(function(event) {
		event.preventDefault();

		let email = $('#email');
		let reg_userid = $('#reg_userid');
		let reg_password = $('#reg_password');
		let re_reg_password = $('#re_reg_password');

		if(email.val() === "a") {
			document.getElementById("register-err").innerHTML = '<span style="color:red">email has been registered</span>';
		} else if(reg_userid.val() === "b") {
			document.getElementById("register-err").innerHTML = '<span style="color:red">username has been registered</span>';
		} else if(reg_password.val().length < 8) {
			document.getElementById("register-err").innerHTML = '<span style="color:red">password is too short</span>';
		} else if(reg_password.val() !== re_reg_password.val()) {
			document.getElementById("register-err").innerHTML = '<span style="color:red">password not match</span>';
		} else {

		} 

		email.val('');
		reg_userid.val('');
		reg_password.val('');
		re_reg_password.val('');

	})

	// signin button
	$("#signin").submit(function(event) {
		event.preventDefault();

		let userid = $('#userid');
		let password = $('#password');
		
		// console.log(user);
		// console.log(pwd);

		if(userid.val() === 'aaa' && password.val() === 'bbb') {
			window.location.replace("http://www.google.com");
		} else {
			userid.val("");
			password.val("");
			document.getElementById("login-err").innerHTML = '<span style="color:red">username or/and password is wrong!</span>';
		}
	})
})

