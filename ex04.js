// 변수의 범위
// 1. 자바스크립트는 {} 자바와 같은 block scope는 없다.
// 2. function의 {} 안에서 변수에 var를 사용하게 되면 function scope가 된다.(지역변수가 된다.)
// 3. let(es6), const(es6)는 Block Scope를 만든다.
var i = 10;
var f = function() {
	var i = 20;				// 지역변수로 선언하게 되면 함수 안에서만 사용.
	console.log("i "+i);
	i = i - 1;
		
	j = 100;				// 전역변수
}

{
	var x = 10;
	const PI = 3.14;
	
	x = 100;
	// 상수이기 때문에 오류가 생김. 값을 변경할 수 없음.
	// PI = 0;
}
console.log("x:" + x);


f();
console.log("i "+i);
console.log("j "+j);
