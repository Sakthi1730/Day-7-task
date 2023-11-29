var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var res = result.filter((fun)=> fun.population > 200000);
    console.log(res);
        
}