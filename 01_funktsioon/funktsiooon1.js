function kehamassiindex(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
function massindex(cm, kg) {
    var m = cm / 100;
    return (1.3 * kg / (Math.pow(m, 2.5)));
}
//console.log(kehamassiindex(170, 80));
//let massid:number[]=[80, 90, 100, 110, 115];
var pikkused = [150, 170, 180, 190];
/*
for(let mass of massid){
    console.log(kehamassiindex(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindex (181,mass));
console.log(indeksid);


//1,3 * kaal (kg) / pikkus (m)**2,5.


for(let mass of massid){
    console.log(massindex(181, mass));
}
let indeksid:number[]=massid.map(mass => massindex (181,mass));
console.log(indeksid);
*/
var vastus = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindex(pikkus, 90), massindex(pikkus, 90)]);
}
console.log(vastus);
