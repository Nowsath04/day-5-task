// Programs in anonymous function

console.log("Programs in anonymous function");
//Print odd num in an array
let arry = [1,2,3,4,5,6,7];

var odd = function(){
    let result = arry.filter(x => x%2 !== 0);
    return result;
}
console.log(odd());

//Convert to title caps
const caps = function(title){
    let result = title.split(' ').map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    return result;

}
console.log(caps('envirnment for all'));
console.log(caps('hello to all'));

//sum of all numbers in array
let sum = function(array){
    let value = 0;
    for(let i of array){
        value += i;
    }
    return value;
}
console.log(sum([6,7,8]));

//Prime numbers in an array
const primeNumber = function(num){
   let result = num.filter((x) => {
    for(let i=2; i<=Math.sqrt(x); i++){
        if(x % i === 0)return false;
    }
    return true;
   });
   return result;
}
console.log(primeNumber([3,4,5,6,7,9,11]));

//Palindromes in an array
const palindrome = function (arry) {

    var len = arry.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (arry[i] !== arry[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome([8,2,2,8]));

//Remove duplicates from array
let duplicates = function (arry) {
return [...new Set(arry)];
}

console.log(duplicates(["car","bike","car","cycle","bike"]));

// Rotate an array by k times

let rotate = function(arry,k){
    if(arry.length > k){
        arry.unshift(...arry.splice(-k))
    }else{
        for(let i=0; i<k; i++){
            arry.unshift(arry.splice(-1))
        }
    }
    return arry
}
console.log(rotate([1,2,3,4],2));





// Programs in IIFE function

console.log("Programs in IIFE function");
//Print odd num in an array
let arry1 = [1,2,3,4,5,6,7];

(function odd(){
    let result = arry1.filter(x => x%2 !== 0);
    console.log(result);
})();

//Convert to title caps
(function caps1(title){
    let result = title.split(' ').map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    console.log(result);

})
('envirnment for all');

//sum of all numbers in array
 (function sum(array){
    let value = 0;
    for(let i of array){
        value += i;
    }
    console.log(value);
})
([6,7,8]);

//Prime numbers in an array
 (function primeNumber(num){
    let result = num.filter((x) => {
     for(let i=2; i<=Math.sqrt(x); i++){
         if(x % i === 0)return false;
     }
     return true;
    });
   console.log(result);
 })
 ([3,4,5,6,7,9,11]);

 //Palindromes in an array
(function palindrome(arry) {

    var len = arry.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (arry[i] !== arry[len - 1 - i]) {
            console.log(false);
        }
    }

    console.log(true);
})
([8,2,2,8]);

//Remove duplicates from array
(function duplicates(arry) {
    let result = [...new Set(arry)];
    console.log(result);
    })
    
(["car","bike","car","cycle","bike"]);


// Rotate an array by k times

(function rotate(arry,k){
    if(arry.length > k){
        arry.unshift(...arry.splice(-k))
    }else{
        for(let i=0; i<k; i++){
            arry.unshift(arry.splice(-1))
        }
    }
    console.log(arry);
})
([1,2,3,4],2);
    



// Programs in arrow function

console.log("Programs in arrow function");
//Print odd num in an array
let arry2 = [1,2,3,4,5,6,7];

var odd = () => {
    let result = arry2.filter(x => x%2 !== 0);
    return result;
}
console.log(odd());

//Convert to title caps
const caps2 = (title) => {
    let result = title.split(' ').map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    return result;

}
console.log(caps2('envirnment for all'));
console.log(caps2('hello to all'));

//sum of all numbers in array
let sum2 = (array) => {
    let value = 0;
    for(let i of array){
        value += i;
    }
    return value;
}
console.log(sum2([6,7,8]));

//Prime numbers in an array
const primeNumber2 =(num)=>{
   let result = num.filter((x) => {
    for(let i=2; i<=Math.sqrt(x); i++){
        if(x % i === 0)return false;
    }
    return true;
   });
   return result;
}
console.log(primeNumber2([3,4,5,6,7,9,11]));

//Palindromes in an array
const palindrome2 = (arry) => {

    var len = arry.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (arry[i] !== arry[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome2([8,2,2,8]));