firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if(user){
    //window.location.replace('http://fea-chatshier.com:3000');
    console.log('sign in');
    $('#register').hide();
    $('#account').show();
    console.log(auth.currentUser.uid);
  } else {
    console.log('need to sign in');
    $('#register').show();
    $('#account').hide();
  }
});

function logout(){
  auth.signOut()
  .then(response => {
    // window.location = 'tinich/global/global.html';
  })
}
