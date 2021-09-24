// Hàm này dược gọi khi HTML tải xong
function SetupEventForDiv() {
	alert("Tài liệu đã tải xong");
	
	var obj = document.getElementById("div1");
	obj.onclick = Div_1_Clicked;
	
	var obj2 = document.getElementById("div2");
	obj2.onmouseover = F1;
	obj2.onmouseout = F2;
}

// Hàm này được gọi khi click lên thẻ DIV 1
function Div_1_Clicked() {
	var obj = document.getElementById("div1");
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute('style', 'background-color: green');
}

// Hàm này được gọi khi rê chuột lên DIV 2
function F1() {
	var obj = document.getElementById("div2");
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute('style', 'background-color: green');
}

// Hàm này được gọi khi rê chuột khỏi DIV 2
function F2() {
	var obj = document.getElementById("div2");
	obj.innerHTML = "OUT";
	obj.setAttribute('style', 'background-color: blue');
}