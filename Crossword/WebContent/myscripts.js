function addRow() {
          
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var cellRow = document.getElementById("cellRow");
    var cellCol = document.getElementById("cellCol");
    var cellData = cellRow.value+","+cellCol.value;
    var across  = document.getElementById("across");
    var down    = document.getElementById("down");
    
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= '<input type="checkbox">';
    row.insertCell(1).innerHTML= rowCount;
    row.insertCell(2).innerHTML= question.value;
    row.insertCell(3).innerHTML= answer.value;
    row.insertCell(4).innerHTML= cellData;
    
 //   row.insertCell(5).innerHTML= across.value;
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
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