// Tính tổng của tất cả các số tự nhiên từ 1 đến 100
// Có nghĩa là 1+2+3+4+......+ 100 = 7

var i;
var tong = 0;

for (i = 1; i <= 100; i++) {
	tong += i;
}
alert('Đây là aler 1: ' + tong);

var i2 = 1;
var tong2 = 0;
while(i2 <= 100) {
	tong2 += i2;
	i2++;
}
alert('Đây là alert 2: ' + tong2);

var i3 = 1;
var tong3 = 0;
do {
	tong3 += i3;
	i3++;
} while(i3 <= 100);
alert('Đây là alert 3: ' + tong3);


var i4 = 1;
for (i4 = 1; i4 <= 100; i4++) {
	if(i4 == 50) {
		break;
	}
}
alert('Đây là alert 4: ' + i4);

var i5 = 1;
var k = 1;
while (i5 <= 100) {
	i5++;
	if(i5 == 50) {
		continue;
	}
	k++;
}
alert('Đây là alert 5: ' + k);