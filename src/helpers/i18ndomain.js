import i18nDomain from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule, translate } from 'react-i18next';
import CHATSHIER from '../config/chatshier';

let domain = document.domain;
let domainName = domain.replace(/^[\w-]+\./i, '').replace(/^rel\./i,'').replace(/^dev\./i,'').replace(/com\.tw$/i,'').replace(/\.tw$/i,'');

i18nDomain.use(Backend).use(reactI18nextModule).init({
    lng: CHATSHIER.DOMAINS[domainName] || 'chatshier',
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
