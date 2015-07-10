/**
 * 
 */

function addPlayTable(){
// var table = document.createElement('TABLE');
var table = document.getElementById(playTable);
table.border = '1';

var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

for (var i = 0; i < 3; i++) {
	var tr = document.createElement('TR');

	for (var j = 0; j < 4; j++) {
		var td = document.createElement('TD');
		td.width = '75';
		td.appendChild(document.createTextNode("Cell " + i + "," + j));

		tr.appendChild(td);
	}
	tableBody.appendChild(tr);
}

}

function Init() {
	addPlayTable();
}