var str = '{"name": "Thư Viện Lập Trình", "Age": 2, "more_infor": {"id": "123", "message": "Hello World"}}';

var obj = JSON.parse(str);
alert("Đây là alert 1: " + obj.name);
alert("Đây là alert 2: " + obj.Age);

obj.name = "ABC";
var str = JSON.stringify(obj);
alert("Đây là alert 3: " + str);

var obj2 = JSON.parse(str);
alert("Đây là alert 4: " + obj2.more_infor.message);



var str2 = '{"name": "Thư Viện Lập Trình", "Age": 2, "more_infor": [123, "ABC", {"id": "Đây là ID"}]}';
var obj3 = JSON.parse(str2);
alert("Đây là alert 5: " + obj3.more_infor[2].id);