
//Find largest number in an array


//1. Using for loop without using function approach

let a = [4,64,8,3,8,22];
let max = a[0];
for (let i = 0 ; i<a.length ; i++){
    if (a[i] > max){
        max = a[i];
        }
        
}
console.log(max)

//-----------------------

//2. Using for loop with using function approach


function largest(a){
    let max = a[0];
for (let i = 0 ; i<a.length ; i++){
    if (a[i] > max){
        max = a[i];
        }
        
}
console.log(max)
}
largest([342,6,44,101]);

//-----------------------

//3. Using Math.max method


function largestnumber (b){
  const  Max = Math.max(...b);
  console.log(Max)
}
largestnumber([57,24,85,12])

//-----------------------

//4. Using reduce


let array = [7,3,88,2,6653,43,101];

const maxnumber = array.reduce ((max , current )=> current > max ? current : max , array[0]);
console.log (maxnumber)

//-----------------------

//5. Sorting an array and picking last element 

let a1 = [7,3,11,2,653,4367,99,0,99,23];
const a2 = a1.sort((a, b) => a - b);
console.log (a2[a2.length-1])



