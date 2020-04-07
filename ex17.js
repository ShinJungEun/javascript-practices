// URL 다루기
var url = "http://localhost:8080/mysite3?n=신정은";

// 1. escape (사용하지x) : URL을 전부 encoding 시킨다, deprecated
var url2 = escape(url);
console.log(url2);


// 2. encodeURI (o) : parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. encodeURIComponent 사용 예
var url = "http://localhost:8080/mysite3";

var o = {
    no: 10,
    name: '신정은',
    email: 'sjy8033@naver.com'
}

var queryString = "";

var toQueryString = function(o) {
    var qs = [];
    for(property in o) {
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }
    return qs.join("&");
}

var url5 = url + "?" + toQueryString(o);
console.log(url5);