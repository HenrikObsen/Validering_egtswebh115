function isRequired(t) {
    if (t == null || t === "") {
        return false;
    } else {
        return true;
    }
}

function isEmail(e) {
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(e);
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isUrl(u) {
    var regex = /(http|https|ftp)?(:\/\/)?(www\.)?[A-Za-z]{1,253}\.([A-Za-z]{1,3}\.)?[A-Za-z]{1,63}/;
    return regex.test(u);
}