var fs = require('fs');
var createHTML = require('create-html');

return Promise.all([
    fs.readFileSync('./bin/head-dsdsds.html', {encoding: 'utf8'}),
    fs.readFileSync('./bin/body.html', {encoding: 'utf8'})
]).then((readFileOutput) => {
    let head = readFileOutput[0];
    let body = readFileOutput[1];
    var html = createHTML({ title: '專業客服整合平台', head, body });
    fs.writeFileSync('./public/index.html', html, {encoding: 'utf8'});
}).catch((ERR) => {
    console.log(ERR);
});
