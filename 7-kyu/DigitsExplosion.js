function explode(s) {

    let str = "";

    for (let i = 0; i < s.length; i++) {
            str = str + s[i].repeat(Number(s[i]));
    }
    console.log(str);
}

let num = '312';
explode(num);


