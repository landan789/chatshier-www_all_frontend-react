import ReactGA from 'react-ga';
import CHATSHIER from '../config/chatshier';

let result = CHATSHIER.DOMAINS.filter((domain) => window.location.hostname.includes(domain)).pop().toUpperCase();

ReactGA.initialize(CHATSHIER.GA[result]);
ReactGA.pageview(window.location.pathname + window.location.search);

export default ReactGA;