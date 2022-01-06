//  Write a Javascript function that check weather a passed string is palindrom or not?

// A Pallindrome is  a word ,phrase , or sequence that reads a same backward as forward,
// e,g :- madam or nurses ,run 

//anonymous function:-
// var pd =function(str){
//     var a,b,c;
//     a=String(str)
//     b=a.split("")
//     c=b.reverse()
//     d=c.join("")
//     if(a==d)
//     {
//         console.log("str is pd")
//     }
//     else
//     {
//         console.log("str not pd")
//     }
// }
// console.log(pd("mom"))

//arrow function:-
var pd =(str)=>{
    var a=String(str)
    var b=a.split("").reverse().join("")
    if(a==b)
    {
        console.log("str is pd")
    }
    else
    {
        console.log("str not pd")
    }
}
console.log(pd("mom"))


