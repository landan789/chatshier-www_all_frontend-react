firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if(user){
    console.log('sign in');
    $('#register').hide();
    $('#account').show();
    console.log(auth.currentUser.uid);
    database.ref('users/' + auth.currentUser.uid).on('value', snap => {
      let profInfo = snap.val();
      if(profInfo === null) {
        console.log('profInfo not found');
      } else {
        let profInfo = snap.val();
        $('#nickname').text(profInfo.nickname);
      }
    });
  }else {
    console.log('need to sign in');
    $('#register').show();
    $('#account').hide();
  }
});

function logout(){
  auth.signOut()
  .then(response => {
    window.location = 'global.html';
  })
}
