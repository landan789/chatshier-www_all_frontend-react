import i18nDomain from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule, translate } from 'react-i18next';
import CHATSHIER from '../config/chatshier';

let serviceUrl = document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');

i18nDomain.use(Backend).use(reactI18nextModule).init({
    lng: _setDomain(CHATSHIER.DOMAINS),
    debug: false,
    react: {
        wait: true
    },
    backend: {
        loadPath: '/domains/{{lng}}.json'
    }
});

function _setDomain(domains) {
    let domainsArr = Object.values(domains)
    let result = domainsArr.filter((domain) => serviceUrl.includes(domain)).pop();
    return result;
}

export default i18nDomain;
const withDomain = translate();
export { withDomain };
