// Đây là một biến global (toàn cục)
var bien_a = 5;

function HamABC(_thamso1, _thamso2) {
	var tong = _thamso1 + _thamso2 + bien_a;
	return tong;
}

var ketqua = HamABC(5, 6);
alert("Đây là alert 1: " + ketqua);