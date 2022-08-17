function checkingMultiplicity(num) {   // Function Declaration
    let arr = [];
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            if ((i % 3 === 0) || (i % 5 === 0)) { //we check for multiplicity of 3 and 5
                arr.push(i);
            }
        }
        return arr;
    }
    return 0;
}

let num = 10;

console.log(checkingMultiplicity(num));