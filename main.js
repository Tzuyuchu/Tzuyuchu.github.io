function $(x) {return document.getElementById(x);}
$("title").innerHTML = "Keepin it Fresh";
$("button").onclick = function() {
    $("title").innerHTML = "Keepin it Fresher";
}
