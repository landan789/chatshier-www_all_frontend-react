import ReactGA from 'react-ga';
import DOMAINS from '../config/domain';
import GoogleAnalytics from '../config/ga';

if (window.location.hostname.includes(DOMAINS[0])) { // Chatshier
    ReactGA.initialize(GoogleAnalytics.CHATSHIER);
    ReactGA.pageview(window.location.pathname + window.location.search);
} else if (window.location.hostname.includes(DOMAINS[1])) { // dsdsds
    ReactGA.initialize(GoogleAnalytics.DSDSDS);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export default ReactGA;