// Set SCREEN_CONTAINER
window.__gigyaConf = window.__gigyaConf || {};
window.__gigyaConf.APIKey = "4_P1PsLai8qySAAQGymJ4UuA";

// Add Gigya JS to HEAD
function loadGigya(lang, callback) {
    var langLowercase = lang.toLowerCase();
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = "//cdns.gigya.com/js/gigya.js?apiKey=" + window.__gigyaConf.APIKey + "&lang=" + langLowercase;
    s.onload = callback;
    s[(s.innerText===undefined?"textContent":"innerText")] = {
        lang: langLowercase,
        EuronewsEdition:langLowercase
      };
    document.getElementsByTagName('head')[0].appendChild(s);

}


// Get parameters from an URL
function getParametersFromUrl(aURL) {
    aURL = aURL || window.location.href;

    var vars = {};
    var hashes = aURL.slice(aURL.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        var hash = hashes[i].split('=');
        if (hash.length > 1) {
            vars[hash[0]] = hash[1];
        } else {
            vars[hash[0]] = null;
        }
    }

    return vars;
}