class CookieHelper {
    get(name) {
        let cookieValues = '; ' + document.cookie;
        let parts = cookieValues.split('; ' + name + '=');

        if (parts.length >= 2) {
            return unescape(decodeURIComponent(parts.pop().split(';').shift()));
        }
        return '';
    }

    clear(name, domain) {
        document.cookie = `${name}=; path=/; domain=${domain}; expires=${new Date(0).toUTCString()}`;
    }
}

export default new CookieHelper();
