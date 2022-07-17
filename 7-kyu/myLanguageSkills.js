//You are given a dictionary/hash/object containing some languages and your test results in the given languages.
// Return the list of languages where your test score is at least 60, in descending order of the results.
// Note: the scores will always be unique (so no duplicate values)

let languages = {
    "Java": 10,
    "Ruby": 80,
    "Python": 65,
    "C++": 50,
    "ASM": 10,
    "Haskell": 20,
    "Hindi": 60,
    "Dutch": 93,
    "Greek": 71
};

let SortingArray = [];

for (let key in languages) {
    if (languages[key] >= 60) {
        SortingArray.push([key, languages[key]]);
    }
}

SortingArray.sort((a, b) => b[1] - a[1]);
console.log(SortingArray);

