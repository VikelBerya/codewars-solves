//Your task is to write such a run-length encoding. For a given string,
// return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ],
// such that one can reconstruct the original string by replicating the character sx ix times
// and concatening all those strings.
// Your run-length encoding should be minimal, i e. for all i the values si and si+1 should differ.

let str = "hello world!";
let arr = [];
let sup = 0;
for (let i = 0; i < str.length; i++) {
    let quantity = 1;
    while ((str[sup] === str [sup + 1])) {
        quantity++;
        i++;
        sup++;
    }
    sup++;
    arr.push([str[i], quantity])
}
console.log(arr)

//Task
// You will be given a list of objects. Each object has type, material,
// and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
// Your job is to sort these objects across the 4 recycling bins according to their material
// (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
let input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "organic", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]
let array = [];
for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        while (input[i].material === input[j].material) {

            array.push(input[j].type);
            j++;
        }
    }
}
console.log(array);