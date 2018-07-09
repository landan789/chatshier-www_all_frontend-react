let fs = require('fs');
let createHTML = require('create-html');

let domain = getDomainName();

function getDomainName() {
    switch (process.argv[2]) {
        case 'dsdsds':
            return 'dsdsds';
        default:
            return 'chatshier';
    }
}

Promise.all([
    fs.readFileSync(`./pub/head-${domain}.html`, { encoding: 'utf8' }),
    fs.readFileSync('./pub/body.html', { encoding: 'utf8' })
]).then(([ head, body ]) => {
    let html = createHTML({ title: '專業客服整合平台', head, body });
    fs.writeFileSync('./public/index.html', html, { encoding: 'utf8' });
}).catch((ERR) => {
    console.log(ERR);
});
