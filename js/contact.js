$(document).ready(function() {
  $('#area').change(function(){
      $(this).removeClass('gery');
      $(this).addClass('black');
  });
  $('#problem-type').change(function(){
      $(this).removeClass('grey');
      $(this).addClass('black');
  });

  $('#contactBtn').click(function(event) {
    event.preventDefault();
    var name = $('#name-2').val();
    var nickname = $('#nickname').val();
    var email = $('#email-2').val();
    var company = $('#company').val();
    var area = $('#area').find(":selected").val();
    var problemType = $('#problem-type').find(":selected").val();
    var comment = $('#comment').val();
    var completeNum =noEmptyValue(name,email,nickname,company,area,problemType,comment);
    if(completeNum===0){
      submitForm(name,nickname,email,company,area,problemType,comment);
    }
    else{
      $('#alert-error').show();
      $('.close').click(function(){
        $('#alert-error').hide();
        $('.form-group input').css('border', '');
        $('.form-group textarea').css('border', '');
        $('.form-group .select-wrapper').css('border', '');
      });
      setTimeout(function(){
        $('#alert-error').hide();
        $('.form-group input').css('border', '');
        $('.form-group textarea').css('border', '');
        $('.form-group .select-wrapper').css('border', '');
      },3000);
    }
  });
  $('input').click(function(){$('.form-group input').css('border', '');});
  $('textarea').click(function(){$('.form-group textarea').css('border', '');});
  $('select').click(function(){$('.form-group .select-wrapper').css('border', '');});
});

function noEmptyValue(name,email,nickname,company,area,problemType,comment) {
  var complete = 0;
  if(name.trim() === ''){
    $('#name-2').css('border', '1px solid red');
    complete++;
  }
  if(nickname.trim() === ''){
    $('#nickname').css('border', '1px solid red');
    complete++;
  }
  if(email.trim() === '' || !validateEmail(email)){
    $('#email-2').css('border', '1px solid red');
    complete++;
  }
  if(company.trim() === ''){
    $('#company').css('border', '1px solid red');
    complete++;
  }
  if(area.trim() === ''){
    $('#area-wrapper').css('border', '1px solid red');
    complete++;
  }
  if(problemType.trim() === ''){
    $('#problem-wrapper').css('border', '1px solid red');
    complete++;
  }
  if(comment.trim() === ''){
    $('#comment').css('border', '1px solid red');
    complete++;
  }
  return complete;
}
function submitForm(name,nickname,email,company,area,problemType,comment) {
  firebase.database().ref('contacts/').push({
    name: name,
    nickname: nickname,
    email: email,
    company: company,
    area: area,
    problemType: problemType,
    comment: comment
  },function(error){
    if(error){

    }
    else{
      $('#alert-success').show();
      $('.form-group input').val('');
      $('.form-group textarea').val('');
      $('.form-group select').val('');
      $('.close').click(function(){$('#alert-success').hide();});
      setTimeout(function(){$('#alert-success').hide();},3000);
    }
  });
}
function validateEmail(email) {
  var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  return regEmail.test(email);
}
