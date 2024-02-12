function addCookie(key,value,expires){
    document.cookie = key+"="+value+";expires="+expires.toUTCString();
}

function removeCookie(key){
    var date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie = key+"=;expires="+date.toUTCString();
}

function getCookie(key){
    var cookieFormated = document.cookie.replace("; ","&");
    var result = new URLSearchParams(cookieFormated);
    return result.get(key);
}