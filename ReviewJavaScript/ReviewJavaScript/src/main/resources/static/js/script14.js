// Dùng id để lấy đối tượng thao tác
var obj = document.getElementById("div1");

// Lấy nội dung của OBJ
var content = obj.innerHTML;

alert("Đây là alert 1: " + content);


var objS = document.getElementsByTagName("b");

var content2 = objS[0].innerHTML;

alert("Đây là alert 2: " + content2);


var obj3 = document.querySelector("#p2.para");

var content3 = obj3.innerHTML;

alert("Đây là alert 3: " + content3);


var obj4 = document.getElementById("div1");

obj4.setAttribute('class', 'NewCss');


var obj5 = document.getElementById("div1");
obj.style.backgroundColor = 'yellow';


function BatDauTinh() {
	var a = parseInt(document.getElementById('txtA').value);
	var b = parseInt(document.getElementById('txtB').value);
	var c = parseInt(document.getElementById('txtC').value);
	
	alert(a);
	alert(b);
	alert(c);
}
