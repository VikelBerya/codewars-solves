function reverseString(str) { //Function Declaration
    let newStr = '';
    for (let word of str.split(" ")) { //We iterate over each word in the original line
        if (word.length >= 5) {
            newStr = newStr + " " + word.split("").reverse().join(""); //We divide the word letter by letter into an array, turn it over and connect it back
        } else {
            newStr = newStr + " " + word;
        }
    }
    return newStr;
}

let str = "Hey fellow warriors";
let str1 = "This is a test";
let str2 = "This is another test";

console.log(reverseString(str));
console.log(reverseString(str1));
console.log(reverseString(str2));
