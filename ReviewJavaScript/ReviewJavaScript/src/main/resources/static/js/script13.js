var now = new Date();

var giờ = now.getHours();

alert("Đây là alert 1: Giờ hiện tại là: " + giờ + " giờ");

var tháng = now.getMonth();

alert("Đây là alert 2: Tháng hiện tại là: " + tháng);

var m = now.getTimezoneOffset();
alert("Đây là aler 3: giờ quốc tế hiện tại của Việt Nam là: " + (m/60));

var now2 = new Date();
now2.setDate(28);
var d = now2.getDate();
alert("Đây là aler 4: " + d);