let num = 287152;
let count = 0;
   let copy = num;
while(num>0){
    count++; 
    let copy = Math.floor(copy/10);
}
console.log(count);