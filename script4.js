var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var currency = result.filter((fun)=>fun.currencies);
    var cur = currency.map((ele)=>ele.currencies);
    var US = cur.filter((elem)=>elem.USD);
    console.log(US);

    
}
