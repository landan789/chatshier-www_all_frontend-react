firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if(user){
    console.log('sign in');
    $('[href="profile.html"]').show();
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
    $('[href="signup.html"]').show();
    $('[href="signin.html"]').show();
  }
});

function logout(){
  auth.signOut()
  .then(response => {
    window.location = 'index.html';
  })
}
