
function convertFahrToCelsius (f) {
result = Number(f)
let c = (result - 32) * 5/9;

if(isNaN(result)){
 return`${JSON.stringify(f)} is not a valid number but a/an ${typeof f}`
}else{
 return c.toFixed(4);
}
}




function checkYuGiOh(n){
 let  a = [];
let count = 1;
 let count2 = 1;

 
 if(!Number(n)){
   return `invalid parameter: ${n}`;
 }else{
  for(let i=0; i<n; i++){
  a[i] = count;
  count++;
 }
for(let i=0; i<n; i++){
  if((a[i] % 2 === 0) && (a[i] % 3 ===0) && (a[i] % 5 === 0)){
   a[i] = "yu-gi-oh";
  }else if((a[i] % 2 === 0) && (a[i] % 3 === 0)){
   a[i] = "yu-gi";
  }else if((a[i] % 2 === 0) && (a[i] % 5 === 0)){
   a[i] = "yu-oh";
  }else if((a[i] % 3 === 0) && (a[i] % 5 === 0)){
   a[i] = "gi-oh";
  }else if(a[i]%2 === 0){
   a[i] = "yu";
  }else if(a[i] % 3 === 0){
   a[i] = "gi";
  }else if(a[i] % 5 === 0){
   a[i] = "oh";
  }
  else{
    a[i] = count2;
    
  }
 count2++;
 } 
 return a;
}
 }


 
 

