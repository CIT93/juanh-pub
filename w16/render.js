import {FORM, TBL} from "./global.js"
import { saveLS } from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  // let newCell_3 = newTR.insertCell(0);
  // let newCell_4 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint`);
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
};

const renderTblHeading = () => {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "actions"];
  headingTextArr.forEach( (text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);  
}

 const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button"); // My code pops up nothing wrong in tools but get nenh so not to sure
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener(`click`,  e => {
  onUpdate(index, data);
  });
  btnEdit.addEventListener(`click`, e => {
    FORM[1].value = obj.first;
    FORM[2].value = obj.last;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    FORM[6].value = obj.foodSource;
    FORM[7].value = obj.waterConsumPoints;
    FORM.water.value = obj.waterValue;
    FORM.dish_washer.checked = obj.both;
    FORM.purchases.value  = obj.purchasesPoints;
    onUpdate(index, data);

  })
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach( (obj, index) => {
    console.log(index);
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"]  
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];  // I changed this line as it was working earlier but I must have messed up code then seen student code and fixed line and also seems to be hard to enter average points
        tr.appendChild(td);
     })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }
};

export { renderTbl };
