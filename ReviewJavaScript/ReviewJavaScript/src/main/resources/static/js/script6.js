// Tính tổng của tất cả các số tự nhiên từ 1 đến 100
// Có nghĩa là 1+2+3+4+......+ 100 = 7

var bien = 15;

switch(bien) {
	case 1 : {
		bien += 10;
		break;
	}
	case 10 : {
		bien += 20;
		break;
	}
	default : {
		bien += 30;
		break;
	}
}
alert('Đây là alert 1: ' + bien);

var bien2 = 10;

switch(bien2) {
	case 1 : {
		bien2 += 10;
		break;
	}
	case 10 : {
		bien2 += 20;
		break;
	}
	default : {
		bien2 += 30;
		break;
	}
}
alert('Đây là alert 2: ' + bien2);

var bien3 = 1;

switch(bien3) {
	case 1 : 
	case 10 : {
		bien3 += 50;
		break;
	}
	default : {
		bien3 += 30;
		break;
	}
}
alert('Đây là alert 3: ' + bien3);

var bien4 = 10;

switch(bien4) {
	case 1 :
	case 10 : {
		bien4 += 50;
		break;
	}
	default : {
		bien4 += 30;
		break;
	}
}
alert('Đây là alert 4: ' + bien4);

var bien5 = 1;

switch(bien5) {
	case 1 : {
		bien5++;
	}
	case 10 : {
		bien5 += 50;
		break;
	}
	default : {
		bien5 += 30;
		break;
	}
}
alert('Đây là alert 5: ' + bien5);

var bien6 = 10;

switch(bien6) {
	case 1 : {
		bien6++;
	}
	case 10 : {
		bien6+= 50;
		break;
	}
	default : {
		bien6 += 30;
		break;
	}
}
alert('Đây là alert 6: ' + bien6);

