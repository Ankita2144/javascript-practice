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
//Extract Names

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
//---------------------------------

//Square Each Number

let h1 = [7,26,51]
const test = h1.map((e)=> e*e)
console.log(test)


///--------------Filter------------

//Even numbers only 
let j1=[1, 2, 3, 4, 5, 6];
const even = j1.filter((e)=> e%2===0)
console.log(even)

//---------------------------
//Words Longer than 4 Letters

let str8= ["cat", "lion", "tiger", "dog","peacock", "Zeb raa"];
str8.filter((e)=> {
  if(e.length>4){
      console.log(e)
  }
})

//---------------------------
//Filter Adults

let persons = [{name:'Noah', age : 19},
    {name:'Tesa' , age : 7},
    {name:'Jay' , age : 18},
    {name:'Groot' , age : 15},
]

persons.filter((e)=>{
    if (e.age >= 18){
        console.log(e.name)
    }
})