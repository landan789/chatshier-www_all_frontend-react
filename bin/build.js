var fs = require('fs');
var createHTML = require('create-html');

var domain = getDomainName();

return Promise.all([
    fs.readFileSync(`./pub/head-${domain}.html`, {encoding: 'utf8'}),
    fs.readFileSync('./pub/body.html', {encoding: 'utf8'})
]).then((readFileOutput) => {
    let head = readFileOutput[0];
    let body = readFileOutput[1];
    var html = createHTML({ title: '專業客服整合平台', head, body });
    fs.writeFileSync('./public/index.html', html, {encoding: 'utf8'});
}).catch((ERR) => {
    console.log(ERR);
});

function getDomainName() {
    switch (process.argv[2]) {
        case 'dsdsds':
            return 'dsdsds'
        default:
            return 'chatshier'
    }
}