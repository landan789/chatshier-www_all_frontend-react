var wwwUrl = location.host;
console.log(wwwUrl);
var serviceUrl = wwwUrl.replace(/^[\w\d\-]+\./i,'service.').replace(/\:\d+$/i,'');
console.log(serviceUrl);

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?\:\/\//i,'');
var url = 'http://' + ( '' === urlConfig.serviceUrl ? serviceUrl : urlConfig.serviceUrl) + ( '' === urlConfig.port ? '' : ':' +urlConfig.port) ; 
var loginUrl = url + urlConfig.login; 
var signupUrl = url + urlConfig.signup; 

$('#login').attr('href', loginUrl);
$('#signup').attr('href', signupUrl);