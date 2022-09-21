window.onload = function(){
    document.getElementById("playname").innerHTML = window.location.hash.substr(1);
    document.getElementById("playname2").innerHTML = window.location.hash.substr(1);
}