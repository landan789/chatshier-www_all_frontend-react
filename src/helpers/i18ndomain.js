import i18nDomain from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule, translate } from 'react-i18next';
import DOMAINS from '../config/domain';

let serviceUrl = document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
// let isDsdsds = serviceUrl.includes('dsdsds.com.tw');

i18nDomain.use(Backend).use(reactI18nextModule).init({
    lng: _setDomain(DOMAINS),
    debug: false,
    react: {
        wait: true
    },
    backend: {
        loadPath: '/domains/{{lng}}.json'
    }
});

function _setDomain(domains) {
    let result = domains.filter((domain) => serviceUrl.includes(domain)).pop();
    return result;
}

export default i18nDomain;
const withDomain = translate();
export { withDomain };
