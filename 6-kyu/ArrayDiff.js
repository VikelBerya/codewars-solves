function arrayDifference(arr1, arr2) {
    for (const item of arr1) {
        for (const item1 of arr2) {
            while (arr1.includes(item1) === true) {
                arr1.splice(arr1.indexOf(item1), 1);
            }
        }
    }
    return arr1;
}

let arr1 = [1, 2, 2, 2, 3, 2, 2, 1];
let arr2 = [2];

console.log(arrayDifference(arr1, arr2));
