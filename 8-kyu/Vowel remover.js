/*
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut (string) {
  let str;
  return str = string.replace(/[a,e,i,o,u]/g, '');
}
