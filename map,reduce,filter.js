let a = [3,5,6,7];
let doublenum= a.map((e) => e*10 );
console.log(doublenum);

//---------------------------------
let b = [3,45,87,9,1];
const minnum = b.reduce((min,number)=> {
    if (min<number){
        return min;
    }
    else 
        return number
} , b[0]); 

console.log(minnum)