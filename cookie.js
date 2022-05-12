function creerCookie(nom, valeur, nbreJours) {
    var dateFinCookie = new Date();
    dateFinCookie.setTime(
        dateFinCookie.getTime() + 24 * nbreJours * 60 * 60 * 1000
    );
    var expires = "expires=" + dateFinCookie.toUTCString();
    document.cookie = nom + "=" + valeur + ";" + expires + ";path=/; sameSite=strict";
}

function effacerCookie(nom) {
    creerCookie(nom, "", -1);
}

function lireCookie(nameCookie) {
    var tabCookie = document.cookie.split("; "); // remarquez l'espace
    for (let i = 0; i < tabCookie.length; i++) {
        var paireSplited = tabCookie[i].split("=");
        if (paireSplited[0] === nameCookie) {
            return paireSplited[1];
        }
    }
    return "";
}