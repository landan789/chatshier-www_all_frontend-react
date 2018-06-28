import ReactGA from 'react-ga';
import CHATSHIER from '../config/chatshier';

let domains = Object.values(CHATSHIER.DOMAINS);
let result = domains.filter((domain) => window.location.hostname.includes(domain)).pop().toUpperCase();

// ReactGA.initialize(CHATSHIER.GOOGLE_ANALYTICS[`DEV_${result}`]);
// ReactGA.initialize(CHATSHIER.GOOGLE_ANALYTICS[`REL_${result}`]);
ReactGA.initialize(CHATSHIER.GOOGLE_ANALYTICS[result]);
ReactGA.pageview(window.location.pathname + window.location.search);

export default ReactGA;