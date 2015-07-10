/**
 * 
 */

function addPlayTable(){
// var table = document.createElement('TABLE');
var table = document.getElementById("playTable");
table.border="1";

var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

for (var i = 0; i < 3; i++) {
	var tr = document.createElement('TR');

	for (var j = 0; j < 4; j++) {
		
		var td = document.createElement('TD');
		td.width = '1';
		//td.appendChild());
		td.innerHTML = '<input type="text" maxlength =1 size = 1/>';
		tr.appendChild(td);
	}
	tableBody.appendChild(tr);
}

}

function initTimer(){
	
	var d = new Date();
	var hours = d.getHours();
	var hours = (hours + 24 - 2) % 24;
	var mid = '';
	if (hours == 0) { //At 00 hours we need to show 12 am
		hours = 12;
		mid = 'AM';
	} else if (hours > 12) {
		hours = hours % 12;
		mid = 'PM';
	}
	//TargetDate = d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.toLocaleTimeString('en-us');
	TargetDate = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " "
			+ ((d.getHours() + 1) % 24) + ":" + d.getMinutes() + " " + mid;
	BackColor = "palegreen";
	ForeColor = "navy";
	CountActive = true;
	CountStepper = -1;
	LeadingZero = true;
	DisplayFormat = "%%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
	FinishMessage = "Time Up!";
}

function Init() {
	addPlayTable();
	initTimer();
}