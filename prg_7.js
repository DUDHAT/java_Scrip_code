// write a javascript function that accepts a string as a parameter and counts the number of vowels within the stirng

// anonymous function
// function vowel_count(str1) {
//     var a = 'IaeiouAEOU';
//     var b = 0;

//     for (var x = 0; x < str1.length; x++) {
//         // console.log(a.indexOf(str1[x]))
        
//         if (a.indexOf(str1[x]) >= 0) {
//             b += 1;
//         }

//     }
//     return b;
// }
// // console.log(" output")
// console.log(vowel_count("chIrag"));

// arrow function:-
const ab=(str1)=>{
    var a = 'IaeiouAEOU';
    var b = 0;

    for (var x = 0; x < str1.length; x++) {
        // console.log(a.indexOf(str1[x]))
        
        if (a.indexOf(str1[x]) >= 0) {
            b += 1;
        }

    }
    return b;
}
console.log(ab("jenil"));