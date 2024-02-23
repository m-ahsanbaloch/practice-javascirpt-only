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
//  var input = document.getElementById("inp");
//  var button = document.getElementById("btn")
//  button.addEventListener("click", function(){
//     var inputValue = input.value;
//     console.log(inputValue)
//  })
 
// var input = document.getElementById("inp");
// var button = document.getElementById("btn")
// var arr =[]
// function myPush(names){
//    // inputValue = input.value;
//    arr[arr.length] = names
//    // inputValue.length = names
//    console.log(arr)
// }
// function myPush(value){
//    // inputValue = input.value;
//    arr[arr.length] = value;
//    // inputValue = value
//    console.log(arr)
// }
// button.addEventListener("click",myPush(input.value));
// var input = document.getElementById("inp")
// var button = document.getElementById("btn")
// var arr = []
// function myPush(value){
//    arr[arr.length] = input.value
//    console.log(arr)
// }  
  // var input = document.getElementById("inp")
  // var button = document.getElementById("btn")
  // var arr = []
  // function myPush(value){
  //  arr[arr.length] = input.value
  //  console.log(arr)
  // }




// myPush(input.value).addEventListener(click, button)
// myPush.addEventListener("click", myPush(){
//    var inputValue = input.value;
//    console.log(inputValue)
// })
// function myFunc(a,b){
// //  var result = a + b
 
//   return a + b ;
 
// }
// // myFunc(10,5)

// console.log(myFunc(15,5))
// ==============assigment-chaper-9-10================
// var cityName = prompt("enter your city name")
// if(cityName === "karachi"){
//   alert("welcome to the city of lights")
// }else{
//   alert("wrong city entered")
// }
// var gender = prompt("enter your gender")
// if(gender === "male"){
// alert("Good Morning Sir")
// }else(alert("Good Morning Madam"))
// var signalColor = prompt("enter color name to know alerts")
// if(signalColor === "red"){
//   alert("Must Stop")
// }
// if(signalColor === "yellow"){
//   alert("Ready to Move")
// }

// if(signalColor === "green"){
//   alert("move now")
// }

// var fuel = prompt("how many fuel left your vehicle in litres")
// if(fuel <= 0.25){
//   alert("“Please refill the fuel in your car”")
// }else{alert("dont Worry and go on")}

// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
//   }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals " + totalCost);
// }
// if("car" < "cat"){
//   alert("car is smaller than cat");
//   }
// ==============assigment-chaper-9-10================

// var input = document.getElementById("inpu");
// var button = document.getElementById("btn1")
// function myNew(a,b){
 
//   return a * b

// }
// function myNew2(value){
//   myNew(input.value,)
//   // mynew = inputValue
// }

// myNew(input.value)

// var screen = document.getElementById("screen")
// var button = document.getElementById("btn")
// function addToDisplay(value){
// var calcValue = screen.value
// var calcValue = calcValue[calcValue.length -2]
// screen.value = value
// }
// ===---===---===
// function myFunction(){
// var sum = 2 + 2;
// return sum;
// }
// var sum = myFunction()
// console.log(sum)

// var day = ["sunday" ,"monday","friday"]
// var daySearch = prompt("enter days")
// switch(daySearch){
  //   case "sunday":
  //   alert("yeaa its funday")
  //   break;
  //   case "friday":
  //   alert("its prayday")
  //   break;
  //   default :
  //   alert("bad day")
  // }
  // var days = prompt("enter day");
  // switch(days){
  //   case "monday":
  //     alert("ohh its work day");
  //     break
  //     case "sunday":
  //       alert("yeaa its funday")
  //       break
  //       case "friday":
  //         alert("yeaa its prayday")
  //         break
  //         default:
  //           alert("its your bad day")
  // }
  // var namee = document.getElementById("name")
  // var button = document.getElementById("btn")
  // function neww(value){
  //   var fullV = namee.value
  //   var fullV = fullV[fullV.length -2]
  //   namee.value = value
  //   console.log(value)
  // }
function neww(value){
  var input = document.getElementById("name")
  var button = document.getElementById("btn")
  // =====
  input = input.value = value
  var newInput = value += input
  // newInput += newInput + input.length -1

  var operator = ["+","-","/","*"]
 
  console.log(input + newInput)
}
