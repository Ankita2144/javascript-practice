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

//---------------------------------
//1. Convert to Strings
let a6 = [7,2,5,2.2,5.20,3]
const str = a6.map((e)=> e.toString())
console.log(str)
//---------------------------------

let a7 = [7,26,52,1.2,5.20,1]
const str1 = a7.map((e)=> String(e))
console.log(str1)


//---------------------------------
 let users = [
{
    name : "Alice",
    age : 45,
 },
 {
    name : "James",
    age : 54,
 },
 {
    name : "John",
    age : 34,
 }
]
function objname(){
const names= users.map((e)=> e.name)
console.log(names)
}

objname();