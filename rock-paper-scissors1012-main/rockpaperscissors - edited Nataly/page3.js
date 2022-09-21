window.onload = function(){
    document.getElementById("message").innerHTML = decodeURI(window.location.hash.substr(1)) ;
}