function HocSinh(name, age, _class) {
	this.NAME = name;
	this.AGE = age;
	this.CLASS = _class;
	this.FULL_INFORMATION = function() {
		return this.NAME + ', ' + this.AGE + ' tuổi, học lớp ' + this.CLASS;
	}
}

var nguyenvana = new HocSinh("Nguyễn Văn A", "17", "12A7");
var lethithuylan = new HocSinh("Lê Thị Thúy Lan", "18", "12A8")

var full_a = nguyenvana.FULL_INFORMATION();
alert("Đây là alert 1: " + full_a);

var full_b = lethithuylan.FULL_INFORMATION();
alert("Đây là alert 2: " + full_b);



function TruongPhong(name, age) {
	this.NAME = name;
	this.AGE = age;
	this.HELLO = function() {
		alert("Đây là alert 3: Chào sếp ! :");
	}
}

function GiamDoc(name, age) {
	this.NAME = name;
	this.AGE = age;
	this.TRUONG_PHONG_KY_THUAT = new TruongPhong("Đặng Văn Lê", 30)
}

var GD = new GiamDoc("Nguyễn Văn Sếp", "40");

GD.TRUONG_PHONG_KY_THUAT.HELLO();
/*var lethithuylan = new HocSinh("Lê Thị Thúy Lan", "18", "12A8")

var full_a = nguyenvana.FULL_INFORMATION();
alert("Đây là alert 1: " + full_a);

var full_b = lethithuylan.FULL_INFORMATION();
alert("Đây là alert 2: " + full_b); */