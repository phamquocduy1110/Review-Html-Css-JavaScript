var Str = "Thư Viện Lập Trình. 'thuvienlaptrinh.edu.vn'. ";
alert("Đây là alert 1:" + Str);

var found_index = Str.indexOf(".");
alert("Đây là alert 2: Vị trí xuất hiện dấu chấm đầu tiên là: " + found_index);

var found_index2 = Str.substr(20, 5);
alert("Đây là alert 3: Chuỗi được căt từ vị trí 20 với 5 ký tự là: " + found_index2);

var found_index3 = Str.substring(20, 30);
alert("Đây là alert 4: Chuỗi được căt từ vị trí 20 đến vị trí trước 30 là: " + found_index3);

var found_index4 = Str.replace("Viện", "VIỆN");
alert("Đây là alert 5: Chuỗi được thay thế là: " + found_index4);

var found_index5 = Str.toLowerCase();
alert("Đây là alert 6: Chuỗi được viết thường: " + found_index5);

var found_index6 = Str.charAt(5);
alert("Đây là alert 7: Chuỗi tại vị trí số 5 là: " + found_index6);

var str_Array = Str.split(' ');
alert("Đây là alert 8: Chuỗi sau khoảng trắng tại vị trí số 4 là: " + str_Array[4]);