function addRow() {
          
    var question = document.getElementById("question");
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
    row.insertCell(5).innerHTML= direction;
 
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
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}