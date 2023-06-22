// function changeText(){
//   document.getElementsByTagName("p")[2].innerText="Hey i am Test"
// }

const { Console } = require("console");

// function changeTextNew(){
//   document.querySelector("p")[1].innerHTML="Hey i am Good"
// }
// function changeImage(){
//   document.getElementById("img").src="https://cdn.pixabay.com/photo/2022/07/28/23/42/rainbow-7350780__340.jpg"
// }
// odd even
// let arr=[1,2,3,4,5,6,7,8,6]
// for(let i=0;i<arr.length;i++){
//     let newarr=arr[i]
//     if(newarr%2==0){
//         console.log("even No. is",newarr);
//     }
//     else{
//         console.log("odd No. is",newarr);
//     }

// box print
// for(i=0;i<=5;i++){
//     for(j=0;j<=5;j++){
//       if(i==0||i==5||j==0||j==5 ){
//           document.write("*")
//       }
//       else{
//            document.write("&nbsp&nbsp")
//       }
      
//   }
//   document.write("<br>")
// }


// prymid star

// for (let i = 1; i <= 5; i++) {
// 	for (let j = 1; j <= 5 - i; j++) {
// 		document.write("&nbsp;&nbsp;");
// 	}
// 	for (let k = 1; k <= (i*2-1); k++) {
// 		document.write("*");
// 	}
  
	
// 	document.write("<br/>");
// }
// document.write("Hey i am Gautam","</br>")
// for(let i=0;i<=5;i++){
//   for(j=0;j<=5;j++){
//     if(i==0||i==5||j==0||j==5){
    
//       document.write("*");
//   }
//   else{
//     document.write("&nbsp&nbsp");
//   }
//   }
//   document.write("<br>");

//   }

// let arr=[1,2,3,4,6,8,-2,-1,5,7,9]
// for(i=0;i<arr.length;i++){
//   for(j=0;j<arr.length;j++){
//     if(arr[i]+arr[j]===6){
//           document.write("Total Pair= " ,arr[i],"  ",arr[j],"<br>")
//         }
//   }
 
// }

function changeToggle() {
    // let data =document.getElementsByTagName("h1");
  // data.classList.add('design');
  // console.log(el)
  let data = document.getElementsByTagName("h1")[0];
  if (data.classList.contains('design')) {
    data.classList.remove('design');
  
  } else {
    data.classList.add('design');
  }

  console.log(data);
}

// function changePassword(){

//   let change=document.getElementById("input");

//   change.type = change.type === "password" ? "text" : "password";

// }

// function copyData() {
//   debugger
//   var dataAll= document.getElementById("checked").checked;
//   var dataFirst = document.getElementById("input1").value;
//   console.log("data 1", dataFirst);
//   if(dataAll==true){
// document.getElementById("input2").value=dataFirst;
//   // console.log("data 2", dataTwo);
//   }
//  else {
//   document.getElementById("input2").value="";
//   }
// }


// function copyData() {
//   var dataAll= document.getElementById("checked").checked;
//   var dataFirst = document.getElementById("input1").value;
//   console.log("data 1", dataFirst);

//   var dataTwo;
//   if (dataAll==true) {
//     dataTwo = document.getElementById("input2").value = dataFirst;
//     console.log("data 2", dataTwo);
//   } else if(dataAll==false){
//     document.getElementById("input2").value = "";
//   }
// }
// function datamap(item,arr){
// debugger
//   var RESULT=arr.filter((e)=>
//     // console.log("e value",e.name)
//     // console.log(item);
//     e.name==item
//     // var listMap = document.getElementById("mylist").innerHTML=i.name
//     // console.log(listMap)
//     );
//     console.log("result data",RESULT)
//     if(RESULT){
//       let printValue(()=>{
//         var myArray=RESULT[0].name;
//         debugger
//         console.log("value name",myArray)
//         Document.getElementById("mylist").value=myArray
      
//       })
      
     
      
//     }
//     return RESULT;
   

    
// }
function datamap(item, arr) {
  debugger;
  var RESULT = arr.filter((e) => e.name === item);
  console.log("result data", RESULT);
  if (RESULT.length > 0) {
    let printValue = () => {
      var myArray = RESULT[0].name;
      debugger;
      console.log("value name", myArray);
      document.getElementById("mylist").innerText = myArray;
    };

    printValue();
  }
  return RESULT;
}




function searchData(){
  let obj=[
    {id:1,name:"Gautam",work:"developer" ,src:'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',},
    {id:2,name:"Raj",work:"php developer",src:'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',},
    {id:3,name:"yash",work:"html developer",src:'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',},
    {id:4,name:"Dinesh",work:"html developer",src:'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',}
  ]
  
 
  
  let inputDataUser=document.getElementById("inputdata").value;
  console.log(inputDataUser);

  datamap(inputDataUser,obj);
  // console.log(DATA);
  // obj.map((i)=>{
  // var listMap = document.getElementById("mylist").innerHTML=i.name
  // console.log(listMap)
  // });

}
console.log(listMap)

