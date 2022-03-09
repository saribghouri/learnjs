let users = JSON.parse(localStorage.getItem("contects"));

var html = "<table>";
html += "<tr>";
html += "<th>" + "index" + "</th>";
html += "<th>" + "firstName" + "</th>";
html += "<th>" + "LastName" + "</th>";
html += "<th>" + "PhoneNumber" + "</th>";
html += "<th>" + "email" + "</th>";
html += "<th>" + "address" + "</th>";
html += "<th>" + "action" + "</th>";
html += "</tr>";
for (var i = 0; i < users.length; i++) {
  html += "<tr>";
  (html += "<td>" + [i]), "</td>";
  html += "<td>" + users[i].firstName + "</td>";
  html += "<td>" + users[i].LastName + "</td>";
  html += "<td>" + users[i].PhoneNumber + "</td>";
  html += "<td>" + users[i].emailValue + "</td>";
  html += "<td>" + users[i].address + "</td>";

  html += "<td><button>Edit</button>  <button>delete</button.setAttribute('onclick', 'deletetr(this)')></td>";

  html += "</tr>";

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  thead.appendChild(table);
  table.appendChild(tbody);

  let row1 = document.createElement("tr");
  let heading1 = document.createElement("th");
  let heading2 = document.createElement("th");
  let heading3 = document.createElement("th");
  let heading4 = document.createElement("th");
  let heading5 = document.createElement("th");

  row1.appendChild(heading1);
  row1.appendChild(heading2);
  row1.appendChild(heading3);
  row1.appendChild(heading4);
  row1.appendChild(heading5);
  thead.appendChild(row1);
}
html += "</table>";
document.getElementById("form").innerHTML = html;

function deletetr(e) {
  e.parentElement.remove()
  console.log(e)

  for (var index = 0; index < data.length; index++) {
    data.splice(index, 1);
  }



}

















































// const users = [
//   {
//     firstName: "Mohsin",
//     lastName: "Ghani",
//     phoneNumber: "03038723828",
//     email: "mohsin@gmail.com",
//     address: "PECHS Block 2",
//   },
//   {
//     firstName: "sarib",
//     lastName: "ghouri",
//     phoneNumber: "03172296946",
//     email: "sarib@gmail.com",
//     address: "PECHS Block 2",
//   },
//   {
//     firstName: "zia",
//     lastName: "rehman",
//     phoneNumber: "03148828873",
//     email: "zia@gmail.com",
//     address: "liari Block 6",
//   },
//   {
//     firstName: "muhammad",
//     lastName: "ahsan",
//     phoneNumber: "03414528528",
//     email: "Mahsan@gmail.com",
//     address: "nine0 Block 1",
//   },
//   {
//     firstName: "hashir",
//     lastName: "khan",
//     phoneNumber: "03214538528",
//     email: "hashir@gmail.com",
//     address: "golimar ",
//   },
//   {
//     firstName: "abrar",
//     lastName: "khatri",
//     phoneNumber: "03122584126",
//     email: "abrar@gmail.com",
//     address: "liari Block 6",
//   },
//   {
//     firstName: "muhammad",
//     lastName: "shayan",
//     phoneNumber: "03333524684",
//     email: "Mshayan@gmail.com",
//     address: "liaqatabad Block 4",
//   },
// ];

// var html = "<table>";
// html += "<tr>";
// html += "<th>" + "firstName" + "</th>";
// html += "<th>" + "lastName" + "</th>";
// html += "<th>" + "phoneNumber" + "</th>";
// html += "<th>" + "email" + "</th>";
// html += "<th>" + "address" + "</th>";
// html += "</tr>";
// for (var i = 0; i < users.length; i++) {
//   html += "<tr>";
//   html += "<td>" + users[i].firstName + "</td>";
//   html += "<td>" + users[i].lastName + "</td>";
//   html += "<td>" + users[i].phoneNumber + "</td>";
//   html += "<td>" + users[i].email + "</td>";
//   html += "<td>" + users[i].address + "</td>";

//   html += "</tr>";

//   let table = document.createElement("table");
//   let thead = document.createElement("thead");
//   let tbody = document.createElement("tbody");

//   thead.appendChild(table);
//   table.appendChild(tbody);

//   let row1 = document.createElement("tr");
//   let heading1 = document.createElement("th");
//   let heading2 = document.createElement("th");
//   let heading3 = document.createElement("th");
//   let heading4 = document.createElement("th");
//   let heading5 = document.createElement("th");
//   heading1.innerHTML = "firstName";
//   heading2.innerHTML = "LastName";
//   heading3.innerHTML = "phoneNumber";
//   heading4.innerHTML = "email";
//   heading5.innerHTML = "Adress";

//   row1.appendChild(heading1);
//   row1.appendChild(heading2);
//   row1.appendChild(heading3);
//   row1.appendChild(heading4);
//   row1.appendChild(heading5);
//   thead.appendChild(row1);
// }
// html += "</table>";
// document.getElementById("form").innerHTML = html;
