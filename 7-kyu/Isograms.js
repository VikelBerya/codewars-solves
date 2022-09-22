function isIsogram(str) {
    let output = true;
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().indexOf(str[i], i + 1) !== -1) {
            output = false;
        }

    }
    console.log(output);
}

let word = "Dermatoglyphics";
let word1 = "aba";
let word2 = "moOse";

isIsogram(word);
isIsogram(word1);
isIsogram(word2);
