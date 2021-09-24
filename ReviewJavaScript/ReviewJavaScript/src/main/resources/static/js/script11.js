var No = 125.55;

var A = No.toString();
var B = A + 6;

alert("Đây là alert 1 kiểu chuỗi: " + B);

var A = No.toFixed(1);
alert("Đây là alert 2 kiểu làm tròn số: " + A);

var No2 = 55;
var A2 = Number(No2);
alert("Đây là alert 3 kiểu Number: " + (A2 + 1));

var No3 = ("10, 20, 30");
var A3 = parseInt(No3);
alert("Đây là alert 4 kiểu parseInt: " + A3);

var No4 = ("10.5, 20, 30");
var A4 = parseFloat(No4);
alert("Đây là alert 5 kiểu parseFloat: " + A4);

