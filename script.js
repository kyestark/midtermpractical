var wrapperEle = document.body.querySelector(".wrapper");
var counterNumber = 0;
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
function increaseCounter(){
 counterNumber = counterNumber + 1;
 document.body.querySelector("#counter").innerHTML=counterNumber
}
for(var i=0; i<list.length; i++){
  var printEle = document.createElement("div");
  printEle.innerHTML=list[i].name;
  wrapperEle.appendChild(printEle);
  if(list[i].age>40){
    printEle.style.color="red"
  }
}
document.body.querySelector(".button").addEventListener("click", function(){
  increaseCounter();
});
 document.body.querySelector("#counter").innerHTML=counterNumber