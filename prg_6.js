// write a javascript function that accepts a string as  a parameter and find the longest word within the string.
// example string : 'web Development tutorial '
// expected output : 'Development'

// var sab = function (abc) {
//     var a, b, c
//     a = abc.split(" ")
//     console.log(a.sort())
//     console.log(a[0])
// }
// console.log(sab("Web Development Tutorial"))


//arrow funcation

var sab = (abc) => {
    var a, b, c
    a = abc.split(" ")
    console.log(a.sort())
    console.log(a[0])
}
console.log(sab("Web Development Tutorial"))