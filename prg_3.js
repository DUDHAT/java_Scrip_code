//3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

//anonymous function:-
// var test = function(str)
// {
//     a=(str.length)
//     for(i=0;i<a;i++)
//     {
//         for(j=i+1;j<a+1 ;j++)
//         {
//             console.log(str.substring(i,j))
//         }
//     }
// }
// console.log(test('dog'))

//arrow function:-
const pd =(str)=>{
    a=(str.length)
    for(i=0;i<a;i++)
    {
        for(j=i+1;j<a+1 ;j++)
        {
            console.log(str.substring(i,j))
        }
    }
}
console.log(pd('dog'))






