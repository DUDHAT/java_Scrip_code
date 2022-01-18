// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 20;
// // // 0 as default
// console.log(sentence.charAt(index));
// console.log(sentence.length);

// harCodeAt()
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 1;
// var b= sentence.charCodeAt(index)
// console.log(b);

// concat
// const str1 = '5';
// const str2 = '5';
// console.log(str1.concat('', str2));
// console.log(str1.concat('52'));

// endsWith
// const std= "this is book!";
// console.log(std.length);
// console.log(std.endsWith('this is boo',11));
// console.log(std.endsWith('is book!'));//last string word allow.

// padEnd
// const str1 = 'Breaded Mushrooms';
// console.log(str1.length)

// console.log(str1.padEnd(25, '.'));

// padEnd
// const str1 = '5';
// console.log(str1.padStart(12, '0'));
// const fullNumber = '20343990021255811';
// const last4Digits = fullNumber.slice(-4);
// console.log(fullNumber.slice(-4));
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber)

// repeat
// const chorus = 'Because I\'m happy. ';
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(5)}`);
// console.log('Chorus lyrics for "Happy":',chorus.repeat(2),);

// replace
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replace('dog', 'monkey'));

// replaceAll
// console.log(p.replaceAll('dog', 'monkey'));

// slice
// const str = 'The quick brown1 fox jumps over the';
// console.log(str.length)
// console.log(str.slice(10,15));//++
// console.log(str.slice(-25,15));//-+
// console.log(str.slice(10,-20));//+-
// console.log(str.slice(-25,-20));//--

// split
const str = 'The quick brown fox jumps over the lazy dog.';

    console.log(str.split(' ')[5]);//this is use it:

const words = str.split(' ');
    console.log(words[5]);

const chars = str.split('');
    console.log(chars[4]);

const strCopy = str.split();
    console.log(str.split());
