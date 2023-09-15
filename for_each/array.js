const r = require("readline-sync");

 var arr= [2000,3000,3000,5000
];
 var min = arr[0];

 arr.forEach((ele)=>{
     {
     if(ele < min)min = ele;
     }
 });
 

 console.log(`The lowest amount is: [${min}]`);

arr.push(6000);

console.log(arr);
