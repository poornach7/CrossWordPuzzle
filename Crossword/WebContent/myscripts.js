function addRow() {
          
    /*var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var cellRow = document.getElementById("cellRow");
    var cellCol = document.getElementById("cellCol");
    var cellData = cellRow.value+","+cellCol.value;
    var direction;
    if (document.getElementById('across').checked)
    	direction    = document.getElementById("across").value;
    if (document.getElementById('down').checked)
    	direction    = document.getElementById("down").value;
    
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML= '<input type="checkbox" id="select">';
    row.insertCell(1).innerHTML= rowCount;
    row.insertCell(2).innerHTML= question.value;
    row.insertCell(3).innerHTML= answer.value;
    row.insertCell(4).innerHTML= cellData;
    row.insertCell(5).innerHTML= direction;*/
	var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML= '<input type="checkbox" id="select" >';
	row.insertCell(1).innerHTML= '<input type="text" name="questionNoValue" id="questionNoValue" size="1" required>';
    row.insertCell(2).innerHTML= '<input type="text" name="questionValue" id="questionValue" required>';
    row.insertCell(3).innerHTML= '<input type="text" name="answerValue" id="answerValue" required>';
    row.insertCell(4).innerHTML= '<input type="text" name="cellValue" id="cellValue" size="6" required>';
    row.insertCell(5).innerHTML= '<input type="text" name="directionValue" id="directionValue" size="2" maxlength=1 required >';
}
 
function deleteRow(obj) {
	
	var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    } 
}
 
function load() {
    
    console.log("Page load finished");
 
}