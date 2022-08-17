function removingVowels(str) { //Function Declaration
    str = str.replace(/a|e|i|o|u/gi, '');
    return str;
}

let str = "This website is for losers LOL!";

console.log(removingVowels(str));