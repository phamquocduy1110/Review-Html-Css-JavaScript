var a = 5;
var b = 6;
var c = 7;

if(a > b) {
	alert("Đây là alert 1: A lớn hơn B");
}
else {
	alert ("Đây là alert 1: B lớn hơn hoặc bằng A");
}

if(a > b || a < c) {
	alert("Đây là alert 2: A lớn hơn B hoặc a bé hơn c");
}
else {
	alert ("Đây là alert 2: B lớn hơn hoặc bằng A");
}

if(a > b && a < c) {
	alert("Đây là alert 3: A lớn hơn B hoặc a bé hơn c");
}
else {
	alert ("Đây là alert 3: ---------------------");
}

if(a > b && a < c || b < c) {
	alert("Đây là alert 4: A lớn hơn B hoặc A bé hơn C");
}
else {
	alert ("Đây là alert 4: ---------------------");
}

var _max = a;

if(_max < b) {
	
	_max = b;
	
	if(_max < c) {		
		_max = c;
	}
	
}
else {
	if(_max < c) {
		_max = c;	
	}
}

alert('Đây là alert 5: ' + _max);