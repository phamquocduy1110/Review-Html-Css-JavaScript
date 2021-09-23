var my_arr = ["A1", "A2", "A3"];

alert("Đây là alert 1: " + my_arr[1]);

my_arr[1] = "B2";
alert("Đây là alert 2: " + my_arr[1]);

my_arr[100] = "B2";
alert("Đây là alert 3: " + my_arr[100]);

var my_arr2 = new Array();

my_arr2[5] = "A1";
my_arr2["key1"] = "B5";
alert("Đây là alert 4: " + my_arr2[5]);