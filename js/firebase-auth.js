if('undefined' === typeof window.config){
  console.warn('Please set up the configuration file of /config/firebase-config.js and /config/url-config.js');
}
firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();


auth.onAuthStateChanged(user => {
  if(user){
    console.log(window.location);
    let signin = window.location.origin + '/signin.html';
    let signup = window.location.origin + '/signup.html';
    console.log('sign in');
    $('li a[href="profile.html"]').css('display','block');
    $('li a[href="../profile.html"]').css('display','block');

    console.log(window.location.href);
    console.log(signin);
    if(window.location.href === signin || window.location.href === signup) {
      window.location = 'index.html';
    }

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
