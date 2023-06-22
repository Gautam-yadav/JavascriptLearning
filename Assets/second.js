let j=5
for(i=0;i<10;i++){
  j=j*i


}
console.log("5 Table",j,"<br>")


let obj = [
  {
    id: 1,
    name: "Gautam",
    work: "developer",
    src: 'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',
  },
  {
    id: 2,
    name: "Raj",
    work: "php developer",
    src: 'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',
  },
  {
    id: 3,
    name: "yash",
    work: "html developer",
    src: 'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',
  },
  {
    id: 4,
    name: "Dinesh",
    work: "html developer",
    src: 'https://static1.squarespace.com/static/5bf645eb5ffd203cac099847/t/5bf91d878a922de88ed63eb0/1543052776663/HP_Background_v4.jpg',
  }
];
const newarray=[];
function PutImage() {
   obj.map((value) => {
    console.log('image value', value);
   newarray.push(value.src);


 
  });
  for(i=0;i<newarray.length;i++) {
    console.log(newarray[i],"image get url")
    document.getElementById("image").src =newarray[i];
    // console.log('element value', element);
  };
  
 

 
}
// var fibSeries = [0, 1];
// let n=20;
//   for (var i = 2; i < n; i++) {
//     fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//   }

//   console.log("Fibonacci Series:");
//   console.log(fibSeries.join(", "));


// let getdate=new Date();
// console.log(getdate)
// console.log(getdate.getDay(),getdate.getTime(),getdate.getMinutes(),getdate.getSeconds())

function getValueSelect(){
  let getValue=document.getElementById("salect").value;
  console.log(getValue)
  if(getValue=="apple"){
    document.getElementById("image").src="https://www.patentlyapple.com/.a/6a0120a5580826970c0263ec21908d200c-800wi"
  }
  if(getValue=="banana"){
    document.getElementById("image").src="https://t3.ftcdn.net/jpg/05/60/43/60/360_F_560436084_Yb8ul024H4ueCRFuNWI9xSrPV39gLFhU.jpg"
  }
  if(getValue=="cherry"){
    document.getElementById("image").src="https://img.freepik.com/premium-vector/cute-funny-running-cherry_464314-1871.jpg?w=1380"
  }
  
}
