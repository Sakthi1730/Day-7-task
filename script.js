
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var asia = result.filter((fun)=>fun.region == "Asia");
    console.log(asia);
}