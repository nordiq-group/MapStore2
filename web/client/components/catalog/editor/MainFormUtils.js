import url from 'url';
/**
 * Check if the URL typed is valid or not
 * @param {string} catalogUrl The URL of the catalog
 * @param {string} currentLocation The current location, by default `window.location.href`
 * @param {boolean} allowUnsecureLayers flag to allow unsecure url
 * @returns {boolean} true if the URL is valid
 */
export const isValidURL = (catalogUrl = '', currentLocation, allowUnsecureLayers) => {
    const { protocol: mapStoreProtocol } = url.parse(currentLocation ?? window.location.href);
    const { protocol: catalogProtocol } = url.parse(catalogUrl);
    if (mapStoreProtocol === 'https:' && !!catalogProtocol) {
        return (mapStoreProtocol === catalogProtocol || allowUnsecureLayers);
    }
    return true;
};
