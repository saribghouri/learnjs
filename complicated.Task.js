const array = [
  {
    data : ""
  }
];

function Add() {
  let txtText1 = document.getElementById("text").value;

  array.push({
    name: txtText1,
    id: Math.random(),
    task: [],
  });
  // localStorage.getItem[array]={}
  // console.log(localStorage)
  // localStorage.setItem("array", array);
  
  getSelectValue();
  console.log(array);
  function getSelectValue() {
    let selector = document.createElement("option");
    array.forEach((e) => {
      let select = document.getElementById("dropdown");
      selector.innerHTML = txtText1;
      select.append(selector);
      selector.text = e.name;
      selector.value = e.id;
      let data= localStorage.getItem('data',array);
      console.log(data)
     console.log(localStorage)
      localStorage.setItem('data',data);
    })
  }
}

const addOption = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = "";
};

const addtask = () => {
  const taskDiv = document.getElementById("taskDiv");
  taskDiv.innerHTML = "";
  const Input = document.getElementById("addInput").value;
  const  selector= document.getElementById("dropdown").value;
  objIndex = array.findIndex((obj) => obj.id == selector);
  array[objIndex].task.push(Input);
  array.forEach((item) => {
    addvalue(item);
  });
};
function addvalue(item){
  const boxsDiv = document.getElementById("taskDiv");
  const box = document.createElement("div");
  box.id = "div";
  box.classList.add("taskBox");
  const heading = document.createElement("h1");
  heading.classList.add("Heading");
  heading.innerHTML = item.name;
  box.appendChild(heading);
  item.task.forEach((item) => {
    const innerDiv = document.createElement("div");
 
    innerDiv.id = "innerDivId";
    innerDiv.classList.add("btnsDiv");
    const PRG = document.createElement("p");
    const PRGid = Math.random();
    PRG.id = PRGid;
    
    const donebtn = document.createElement("button");
    donebtn.innerHTML = "Task Done";
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("background-color", "black");
    deleteBtn.innerHTML = "Delete";
    PRG.innerHTML = item;
    innerDiv.appendChild(PRG);
    innerDiv.appendChild(donebtn);
    innerDiv.appendChild(editBtn);
    innerDiv.appendChild(deleteBtn);
    box.appendChild(innerDiv);
    boxsDiv.appendChild(box);
  });
};
