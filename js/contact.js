$(document).ready(function() {
  $('#contactBtn').click(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let nickname = $('#nickname').val();
    let company = $('#company').val();
    let area = $('#area').find(":selected").val();
    let problem_type = $('#problem_type').find(":selected").val();
    let comment = $('#comment').val();
    if(noEmptyValue(name,email,nickname,company,area,problem_type,comment)){
      submitForm(name,email,nickname,company,area,problem_type,comment)
    }
  });
});
function noEmptyValue(name,email,nickname,company,area,problem_type,comment) {
  $('.form-group input').css('border', '');
  $('.form-group select').css('border', '');
  let complete = false;
  if(name.trim() === ''){
    $('#name').css('border', '1px solid red');
  } else if(email.trim() === '' || !validateEmail(email)){
    $('#email').css('border', '1px solid red');
  } else if(nickname.trim() === ''){
    $('#nickname').css('border', '1px solid red');
  } else if(company.trim() === ''){
    $('#company').css('border', '1px solid red');
  } else if(area.trim() === ''){
    $('#area').css('border', '1px solid red');
  } else if(problem_type.trim() === ''){
    $('#problem_type').css('border', '1px solid red');
  } else if(comment.trim() === ''){
    $('#comment').css('border', '1px solid red');
  } else {
    complete = true;
  }
  return complete;
}
function submitForm(name,email,nickname,company,area,problem_type,comment) {
  database.ref('contact/').push({
    name,email,nickname,company,area,problem_type,comment
  });
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
