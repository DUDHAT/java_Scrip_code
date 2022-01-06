//write a java scrpt function that reverse a number.
//example x=32243;
//expected output: 34223

//arrow function:-
const reverse = (num) =>String(num).split("").reverse().join("")
console.log(reverse(123))


// //anonymous function:-
// var aaa =function(num)
// {
//     var a,b,c,d;
//     a=String(num)
//     b=a.split("")
//     c=b.reverse()
//     d=c.join("")
//     return d;
// }
// console.log(aaa(123))

