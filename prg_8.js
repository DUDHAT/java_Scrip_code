//  Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not. 

// var abc = function (n) {
//     var count = 0, i
//     for (i = 2; i < n; i++) {

//         if (n % i == 0) {
//             count++
//         }
//     }
//     if (count == 0) {
//         console.log("this is prime")
//     }
//     else {
//         console.log("this is not prime")
//     }

// }
// console.log(abc(3))

//arrow funcation
var abc = (n) => {
    var count = 0, i
    for (i = 2; i < n; i++) {

        if (n % i == 0) {
            count++
        }
    }
    if (count == 0) {
        console.log("this is prime")
    }
    else {
        console.log("this is not prime")
    }

}
console.log(abc(6))


