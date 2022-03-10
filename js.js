let users = JSON.parse(localStorage.getItem("contects"));

const tb = document.getElementById("table");

let row1 = document.createElement("tr");

let heading1 = document.createElement("th");
let heading2 = document.createElement("th");
let heading3 = document.createElement("th");
let heading4 = document.createElement("th");
let heading5 = document.createElement("th");
let heading6 = document.createElement("th");
let heading7 = document.createElement("th");

(heading1.innerText = "INDEX"),
  (heading2.innerText = "FIRSTNAME"),
  (heading3.innerText = "LASTNAME"),
  (heading4.innerText = "EMAIL"),
  (heading5.innerText = "PHONENUMBER"),
  (heading6.innerText = "ADDRESS"),
  (heading7.innerText = "ACTION"),
  row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
row1.appendChild(heading5);
row1.appendChild(heading6);
row1.appendChild(heading7);

tb.appendChild(row1);

users.forEach((item, index) => {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  let btn = document.createElement("button");
  btn.innerHTML = "adit";
  let btn1 = document.createElement("button");
  btn1.innerHTML = "delete";
  btn1.onclick = function () {
    // deleteContect(index);
  };

  td7.appendChild(btn);
  td7.appendChild(btn1);
  (td1.innerText = index),
    (td2.innerText = item.firstName),
    (td3.innerText = item.LastName),
    (td4.innerText = item.emailValue),
    (td5.innerText = item.PhoneNumber),
    (td6.innerText = item.address),
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  tb.appendChild(trow);
  
  deleteContect(index);
});
function deleteContect(index) {
  const data = JSON.parse(localStorage.getItem("contects"));
  data.splice(index, 1);
  localStorage.setItem("contects", JSON.stringify(data))
  location.reload()
  console.log(index);
}
