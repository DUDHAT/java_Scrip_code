//write a javascript function that returns a passed string with letters in alphabetical order.
  //exampl string:'webmaster'
  //exampl output:'abeemrstw'
//assume punctuation and numbers symbols are not included in the passed string.

// anonymous function
function alphabet_order(str) {
    return str.split('').sort().join('');
 }
 console.log(alphabet_order("webmaster"));

 
//arrow function
// var a=(abc)=>String(abc).split("").sort().join("").replace("");
// console.log(a("dgnhsjdm"));