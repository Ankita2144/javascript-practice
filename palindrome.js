// To check if the string is palimdrome of not 

function reverseString(){
    let string = "aba";
    const revstr= string.split('').reverse().join('');
    if(string === revstr){
      return 'Palimdrome';
    }
    else { return 'Not a palimdrome';}
}
console.log(reverseString());