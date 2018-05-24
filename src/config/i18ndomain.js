import i18nDomain from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule, translate } from 'react-i18next';

let serviceUrl = document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
let isDsdsds = serviceUrl.includes('dsdsds.com.tw');

i18nDomain.use(Backend).use(reactI18nextModule).init({
    lng: isDsdsds ? 'dsdsds' : 'chatshier',
    debug: false,
    react: {
        wait: true
    },
    backend: {
        loadPath: '/domains/{{lng}}.json'
    }
});

export default i18nDomain;
const withDomain = translate();
export { withDomain };
