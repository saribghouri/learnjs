let table = document.getElementById("table");
const array = [];

let contectli = JSON.parse(localStorage.getItem("contects"));

let th1= document.createElement("th")
let th2= document.createElement("th")
let th3= document.createElement("th")
let th4= document.createElement("th")
let th5= document.createElement("th")


let td1 =document.createElement("td");
let td2 =document.createElement("td");
let td3 =document.createElement("td");
let td4 =document.createElement("td");
let td5 =document.createElement("td");

td1.innerHTML = `FirstName:`
td2.innerHTML = `lastName:`
td3.innerHTML = `email:`
td4.innerHTML = `PhoneNumber:`
td5.innerHTML = `address:`

for (i = 0; i <= contectli?.length - 1; i++) {
  let tr = document.createElement("tr");
  const input= document.createElement("input")
  let button = document.createElement("button")
  let adit = document.createElement("button");

  // let td1 =document.createElement("td");
  // let td2 =document.createElement("td");
  // let td3 =document.createElement("td");
  // let td4 =document.createElement("td");
  // let td5 =document.createElement("td");
  
let value = map(list =>{


  
  adit.setAttribute("class", "sg");
  th1.innerHTML= contectli?.[i]?.firstName;
  th2.innerHTML= contectli?.[i]?.LastName; 
   th3.innerHTML=  contectli?.[i]?.email ; 
   th4.innerHTML = contectli?.[i]?.PhoneNumber ; 
   th5.innerHTML= contectli?.[i]?.address;
  button.innerHTML="delete"
  adit.innerHTML="adit"
})
  adit.setAttribute('onclick', 'adittr(this)')
  button.setAttribute('onclick', 'deletetr(this)')
  tr.append(button);
  tr.append(adit)
  table.appendChild(tr);
  table.append(td1);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  tr.append(td5);
  td1.append(th1);
  td2.append(th2);
  td3.append(th3);
  td4.append(th4);
  td5.append(th5);

//  th1.append(td1)
//  th2.append(td2)
//  th3.append(td3)
//  th4.append(td4)
//  th5.append(td5)

}
function deletetr(e) {
    e.parentElement.remove()
    console.log(e)
    const data = JSON.parse(localStorage.getItem('contects'))
    for (var index = 0; index < data.length; index++) {
      data.splice(index, 1);
    }
    localStorage.setItem('contects', JSON.stringify(data))
  
  console.log(contectli)

}
  function adittr(e){
    var value = e.previousSibling.previousSibling;
    var li = document.createElement('tr')
    var input = document.createElement('input')
    var button = document.createElement('button')
    button.setAttribute('onclick', 'updatetr(this)')
    button.innerHTML = "update"
    input.value = value.nodeValue != null
    li.appendChild(input)
    li.appendChild(button)
    e.parentNode.replaceWith(li)
}

function updateLi(e){
  var li = document.createElement('tr')
  li.innerHTML = `${e.previousSibling.value}`
  let button = document.createElement("button")
  let adit = document.createElement("button");
  adit.setAttribute("class", "sg");
  button.innerHTML="delete"
  adit.innerHTML="adit"
  adit.setAttribute('onclick', 'aditLi(this)')
  button.setAttribute('onclick', 'deleteLi(this)')
  li.append(button);
  li.append(adit)
  e.parentNode.replaceWith(li)
}
