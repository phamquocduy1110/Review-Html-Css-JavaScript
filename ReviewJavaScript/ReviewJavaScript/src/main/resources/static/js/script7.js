function ChiaAB(a, b) {
	var t = a / c;
	return t;
}

try {
	var kq = ChiaAB(15, 0);
	alert("Đây là alert 1: " + kq);
} catch(e) {
	alert("Đây là alert 1: Lỗi, " + e.message);
}

function ChiaAB2(a, b) {
	if(b == 0) {
		throw "Không thể có phép chia cho 0";
	}
	var t = a / b;
	return t;
}

try {
	var kq = ChiaAB2(15, 0);
	alert("Đây là alert 2 có kết quả là: " + kq);
} catch(e) {
	alert("Đây là alert 2: Lỗi, " + e);
}