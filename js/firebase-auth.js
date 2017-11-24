firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if(user){
    console.log('sign in');
    $('li a[href="profile.html"]').css('display','block');
    $('li a[href="../profile.html"]').css('display','block');

    console.log(auth.currentUser.uid);
    database.ref('users/' + auth.currentUser.uid).on('value', snap => {
      let profInfo = snap.val();
      if(profInfo === null) {
        console.log('profInfo not found');
      } else {
        let profInfo = snap.val();
      }
    });
  } else {
    console.log('need to sign in');
    $('li a[href="signup.html"]').css('display','block');
    $('li a[href="../signup.html"]').css('display','block');

    $('li a[href="signin.html"]').css('display','block');
    $('li a[href="../signin.html"]').css('display','block');
  }
});

function logout(){
  auth.signOut()
  .then(response => {
    window.location = 'index.html';
  })
}
