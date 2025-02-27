function ak1(a:number, c:number, d:number):number {
    return (a+c+d)/3;
}
function ak2(m:number[]):number {
    m.reduce((a, b) => a+b);
}

function ak3(...args:number[]):number { //OTKUDA YA DOLZHNA ZNATT PRO ETI EBANIE TRI TOCHKI???????
    return ak2(args);
}

console.log(ak3(3,5));
console.log(ak2([3,4,5,6]));
console.log(ak1(4,6,7));

function lk1(m:number[]):number[] {
    let v:number[]=[];
    for (let nr = 0; nr < m.length-2; nr++) {
        v.push(ak1(m[nr], m[nr+1], m[nr+2]))
   }
   return v;
}

function lk2(m:number[]):number[] {
    let v:number[]=[];
    let pikkus=2;
    for (let nr = 0; nr < m.length-pikkus+1; nr++) {
        v.push(ak2(m.slice(nr, nr+pikkus)))
    }
    return v;
}

console.log(lk1([1,2,5,3,3]));
