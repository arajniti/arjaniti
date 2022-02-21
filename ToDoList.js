const input=document.querySelector(".inputs input");
const btn=document.querySelector(".inputs button");
const todo=document.querySelector(".toDoTHings");
const deletebtn=document.querySelector(".footer button");
  input.onkeyup = () => {
  let userData=input.value;
  if(userData.trim() != 0){
    btn.classList.add("active");
  }else{
    btn.classList.remove("active");
  };
};

showTask();

btn.onclick=()=>{
  let userData=input.value;
  let getStorage= localStorage.getItem("New ToDo");
  if(getStorage==null){
    arr=[];
  }else{
    arr=JSON.parse(getStorage);
  }
  arr.push(userData);
  localStorage.setItem("New ToDo" , JSON.stringify(arr));
  showTask();
}

function showTask() {
  let getStorage= localStorage.getItem("New ToDo");
  if(getStorage==null){
    arr=[];
  }else{
    arr=JSON.parse(getStorage);
  }
  const pendingtask=document.querySelector(".pendingtask");
  pendingtask.textContent=arr.length;
  let newLitag='';
  arr.forEach((element,index) => {
    newLitag +=`<li> ${element} <span onclick="DeleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
  });
  todo.innerHTML= newLitag;
  input.value= "";
}

function DeleteTask(index){
  let getStorage= localStorage.getItem("New ToDo");
  arr=JSON.parse(getStorage);
  arr.splice(index,1)

  localStorage.setItem("New ToDo" , JSON.stringify(arr));
  showTask();
}

deletebtn.onclick=()=>{
  arr=[];
  localStorage.setItem("New ToDo" , JSON.stringify(arr));
  showTask();
}