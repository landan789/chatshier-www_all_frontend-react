$(document).ready(function() {
  auth.onAuthStateChanged(user => {
    if(user){
      let userId = auth.currentUser.uid;
      database.ref('users/' + userId).on('value', snap => {
        let profInfo = snap.val();
        if(profInfo === null) {
        } else {
          let profInfo = snap.val();
          $('#edit-name').val(profInfo.name);
          $('#edit-email').val(profInfo.email);
          $('#edit-nickname').val(profInfo.nickname);
        }
      });
    } else {
      console.log('need to sign in');
    }
  });

  $('#cancel-button').click(function(){
    window.location.href='global.html';
  });

  $('#confirm-button').click(function(){
    let name=$('#edit-name').val();
    let nickname=$('#edit-nickname').val();

    if(!name){
      alert('please fill in your name');
    }else if (!nickname) {
      alert('please fill in your nickname');
    }else{
      auth.onAuthStateChanged(user => {
        if(user){
          let userId = auth.currentUser.uid;
          database.ref('users/' + userId).update({
            name: name,
            nickname: nickname
          });
        } else {
          console.log('need to sign in');
        }
      });
      alert('saved!');
      window.location.href='global.html';
    }
  });

});
