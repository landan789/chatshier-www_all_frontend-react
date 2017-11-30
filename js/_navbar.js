if ('undefined' === typeof window.urlConfig) {
  console.warn('Please set up the configuration file of /config/url-config.js');
}

document.cookie = 'name=TOM;domain=.fea.chatshier.com';
document.cookie = 'email=aa@gmail.com;domain=.fea.chatshier.com';

var wwwUrl = location.host;
var serviceUrl = wwwUrl.replace(/^[\w\-]+\./i, 'service.').replace(/\:\d+$/i, '');

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?\:\/\//i, '');
var url = 'http://' + ('' === urlConfig.serviceUrl ? serviceUrl : urlConfig.serviceUrl) + ('' === urlConfig.port ? '' : ':' + urlConfig.port );
var loginUrl = url + urlConfig.login;
var signupUrl = url + urlConfig.signup;
var chatUrl = url + urlConfig.chat;

var name = getCookie('name');
var email = getCookie('email');

if( '' !== name && '' !== email){
  $('#login').addClass('hidden');
  $('#signup').addClass('hidden');
  $('#chat').removeClass('hidden');
  $('#dropdown-user').removeClass('hidden');
  $('#name').html('');
  $('#email').html('');
  $('#name').html(name);
  $('#email').html(email);

}else{
  $('#login').removeClass('hidden');
  $('#signup').removeClass('hidden');
  $('#chat').addClass('hidden');
  $('#dropdown-user').addClass('hidden');

}
$('#login').attr('href', loginUrl);
$('#signup').attr('href', signupUrl);
$('#chat').attr('href', chatUrl);


$('#dropdown-user').on('show.bs.dropdown', function () {
  $(this).children('.arrow-up').removeClass('hidden');
})

$('#dropdown-user').on('hide.bs.dropdown', function () {
  $(this).children('.arrow-up').addClass('hidden');
})
