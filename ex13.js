/* 
* 배열 (Array)
*/


console.log("=====================1. 생성자 함수========================");
// 1. 생성자 함수
var a1 = new Array();
console.log(typeof(a1));


// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어 난다.
var a2 = new Array(10);     
console.log(a2.length);

a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;
console.log(a2[1], a2[2]);      // 배열 요소에 값을 대입하지 않으면 undefined
console.log(a2.length);

console.log("======================Array Vs Object=======================");
a = [];
a["0"] = 0;         // property 이름은 string => a["0"]
a["1"] = 1;
a["name"] = '머지?';
console.log(a["0"], a[0], a["name"], a.length);

for( property in a ) {
    console.log("prop: " + property + ":" + typeof(property));
}

console.log("=============================================");

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = '머지?';
console.log(o["0"], o[0], o["name"], o.length);

console.log("======================리터럴=======================");
// 2. 리터럴
var a3 = [];            
console.log(typeof(a3), a3.length);

var a4 = [function() {
    console.log("hello")
    },
    20,
    "javascript",
    true,
    {
        email: 'sjy8033@naver.com',
        name: '신정은'
    },
    null,
    undefined
];
console.log(a4.length);
for(var i = 0; i < a4.length; i++) {
    console.log(a4[i]);
}

// 배열 초기화
var a3 = [10, 20, 30, 40];
