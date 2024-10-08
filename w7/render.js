const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  let existingTable = document.querySelector("table");
  if (existingTable) {
    return existingTable;
  }
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  //const headingTextArr = ["Name","HouseHold","HouseSize","Footprint","actions",];
  const headingTextArr = ["Name",,"Footprint",];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(dataArray) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  //const trTextArr = ["juan", 6, "large", 14];
  dataArray.forEach(function (text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
  table.appendChild(tbody);
  

  
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
return table;
export { renderTbl, renderTblHeading };

// function renderTbl(data) {
//   const table = renderTblHeading(); 
//   const tbody = document.createElement("tbody");
//   const tr = document.createElement("tr");
//   const trTextArr = ["juan", 6, "large", 14];
//   trTextArr.forEach(function (text) {
//     const td = document.createElement("td");
//     td.textContent = text;
//     tr.appendChild(td);
//   });