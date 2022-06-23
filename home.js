var mydata = JSON.parse(data);

//console.log(mydata[0]);

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("r_table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}    

function CreateTableFromJSON() {

    
    var col = ["NAME","ID","PRICE","DISCTANCE"];
    var table = document.createElement("table");
    
    //COLLECT TABLE HEADER
    var col = [];
    for (var i = 0; i < mydata.length; i++) {
        for (var key in mydata[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    //FILL TABLE  VALUES
    // var tr = table.insertRow(-1);   
    // for (var i = 0; i < col.length; i++) {
    //     var th = document.createElement("th");      // TABLE HEADER.
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < mydata.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = mydata[i][col[j]];
        }
    }

    let dataHtml = '';
    for(let property of mydata){
        dataHtml += `<tr>
                        <td>${property.r_name}</td>
                        <td>${property.price_for_two}</td>
                        <td>${property.distance}</td>
                    </tr>`;
    }
              const tableBody = document.getElementById('tableData');
              tableBody.innerHTML = dataHtml;
    //           for( let property of mydata){
    //             var newDiv = document.createElement("div");
    //             document.body.appendChild(newDiv);

    //             let rName = document.createElement("h4");
    //             rName.innerHTML = property.r_name;
    //             document.getElementById('restaurantName').appendChild(rName);

    //             let rPrice = document.createElement("h4");
    //             rPrice.innerHTML = property.price_for_two;
    //             document.getElementById('priceForTwo').appendChild(rPrice);
            
    //             let rDistance = document.createElement("P");
    //             rDistance.innerHTML = property.distance;
    //             document.getElementById('distance').appendChild(rDistance);
    //           }
              
    // let myTextNode_NAME = '';
    // for(let property of mydata){
    //   myTextNode_NAME = document.createTextNode(property.r_name);

    //   const r_name = document.getElementById('restaurantName');
    //   r_name.innerHTML = myTextNode_NAME;
      
    //   console.log(myTextNode_NAME);
    // }

    // console.log(dataHtml);
    // let dataName = '';
    // for(let property of mydata){
    //     dataName += property.r_name
    // }

    // const dataTemp1 = document.getElementById('restaurantName');
    // dataTemp1.innerHTML = dataName;
    // console.log(dataName);

  
 
    // for(let i=0; i<mydata.length; i++){
    //   const newDiv02 = document.createElement("div");
    //   newDiv02.className = "container"
    //   const newDiv01 = document.createElement("div");
    //   newDiv01.className = "menu"
    //   const newDiv0 = document.createElement("div");
    //   newDiv0.className = "menu-group"
    //   const newDiv = document.createElement("div");
    //   newDiv.className = "menu-item"
    //   const newDiv2 = document.createElement("div");
    //   newDiv2.className = "menu-item-heading"
    //   const newDiv3 = document.createElement("div");
    //   newDiv3.className = "menu-item-text"

    //   const rID = document.createElement("p");
    //   const R_ID = document.createTextNode(mydata[i].r_id);
    //   rID.appendChild(R_ID);
    //   newDiv3.append(rID);
    //   newDiv2.append(newDiv3);
    //   newDiv.append(newDiv2);
    //   newDiv0.append(newDiv);
    //   newDiv01.append(newDiv0);
    //   newDiv02.append(newDiv01);

    //   const rNAME = document.createElement("h4");
    //   const R_NAME = document.createTextNode(mydata[i].r_name);
    //   rNAME.appendChild(R_NAME);
    //   newDiv3.append(rID);
    //   newDiv2.append(newDiv3);
    //   newDiv.append(newDiv2);
    //   newDiv0.append(newDiv);
    //   newDiv01.append(newDiv0);
    //   newDiv02.append(newDiv01);

    //   document.body.append(newDiv02);


    // }
   
  }


// function generate_table() {
//   // creates a <table> element and a <tbody> element
//    const tbl = document.createElement("table");
//    const tblBody = document.createElement("tbody");
 
//    // creating all cells
//    for (let i = 0; i < 2; i++) {
//      // creates a table row
//      const row = document.createElement("tr");
 
//      for (let j = 0; j < 2; j++) {
//        // Create a <td> element and a text node, make the text
//        // node the contents of the <td>, and put the <td> at
//        // the end of the table row
//        const cell = document.createElement("td");
//        const cellText = document.createTextNode("cell in row "+i+", column "+j);
//        cell.appendChild(cellText);
//        row.appendChild(cell);
//      }
 
//      // add the row to the end of the table body
//      tblBody.appendChild(row);
//    }
 
//    // put the <tbody> in the <table>
//    tbl.appendChild(tblBody);
//    // appends <table> into <body>
//    document.body.appendChild(tbl);
//    // sets the border attribute of tbl to '2'
//    tbl.setAttribute("border", "2");
//  }