// que (5). Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '

// arrow function:-
// const str = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   };
  
//    str1 = str('the quick brown fox ');
//   console.log(str1);

  // anonymous function:-
  
  var pd =function(str){
        var a,b,c,d;
        a=String(str)
        b=a.split(" ")
        c=b.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        d=c.join(" ")
        return d;
  }
  console.log(pd("the quick brown fox "))