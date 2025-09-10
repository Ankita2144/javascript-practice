// TO reverse a STRING 

let string = "Testing";
let reversed = string.split('').reverse().join('');
console.log(reversed);

//---------------------------------

function reverseString(){
    let string = "Java";
    return string.split('').reverse().join('');
}
console.log(reverseString());

//---------------------------------

function reverse(){
    let a = "QA Engineer";
    console.log(a.length);
    let b='';

for (let i =a.length-1; i>=0; i--) {
    b = b + a[i] 
}
    console.log(b);

}
reverse();

//---------------------------------

let str = 'Test Engineer';
const arr = str.split('');
const revstr= arr.reduce ((rev,arr) => arr+rev ,'');
console.log (revstr);

//---------------------------------

function reverse(str=''){
return str.split('').reduce((rev,char) => char+rev , '');
}
console.log(reverse('Javascript'));
