function numToSquare(num) {
    let array = [];
    let power = " ";
    while (num >= 1) {
        array.push(Math.trunc(num % 10));
        num = num / 10;
    }
    array.reverse();
    for (let i = 0; i < array.length; i++) {
        power = power + " " + Math.pow(array[i], 2);
    }
    return parseInt(power.split(' ').join(''), 10);
}

let num = 9119;
console.log(numToSquare(num));