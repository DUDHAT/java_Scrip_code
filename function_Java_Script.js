// function evenorodd(num)
// {
//     if(num%2==0)
//     {
//         console.log("even");
//     }
//     else
//     {
//         console.log("odd");
//     }
// }
// evenorodd(11);

// anonymous function
// var evenorodd=function(num)
// {
//     if(num%2==0)
//         {
//             console.log(num+"\neven");
//         }
//         else
//         {
//             console.log(num+"\nodd");
//         }
// }
// evenorodd(12)

// var evenorodd=function(str)
// {
//    let a=String(str);
//    let b=a.split("");
//     let c=b.reverse("");
//    let d=c.join("");
//    return d;
// }
// evenorodd(656587)
// console.log(evenorodd(6565));

// var hello=function()
// {
//     return "hello world!";
// }
// console.log(hello());

//arrow function
// var arrow =() =>
// {
// return "HELLO WORLD!";
// }
// console.log(arrow());

// var arrow =(num) =>{
//     if(num%2==0)
//             {
//                 console.log(num+"\neven");
//             }
//             else
//             {
//                console.log(num+"\nodd");
//             }
// }
// arrow(10);

// var hello=(var1,var2) =>
// {
//     return "HELLO"+(var1+var2);
// }

var callsum = ( getsum) =>
{
    console.log("getsum :",getsum);
    console.log(getsum(10));
}
callsum(function(a)
{
    if(a%2==0)
            {
                return (a+"\neven");
            }
            else
            {
                return (a+"\nodd");
            }  
}
);