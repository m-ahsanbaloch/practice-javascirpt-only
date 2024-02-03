// function ahsan(nam){
//     console.log(nam)
// }
// var nam = prompt("enter your name")
// ahsan(nam)

// function ahsan(nam) {

//     console.log(nam)
// }
// ahsan(prompt("enter your name"))
// var nam = ahsan("")

// function test(name) {
//   var userName = name;
//   console.log("inside Name -->", userName);
// }

// test(prompt(""));

// var name = "baloch";

// console.log("outer name-->", name);

// var input = document.getElementById("inp");
// var button = document.getElementById("btn");
// var h1 = document.getElementById("text");

// ======= EventListener =======
// button.addEventListener("keyUp", function () {
//    var inputValue = input.value;
//    console.log(input.value);
//   h1.innerHTML = input.value;
// });

// ======= simple on click ======
// function gettingName() {
//   var inputValue = input.value;
//   h1.innerHTML = input.value;
// }
 var input = document.getElementById("inp");
 var button = document.getElementById("btn")
 button.addEventListener("click", function(){
    var inputValue = input.value;
    console.log(input.value)
 })
 