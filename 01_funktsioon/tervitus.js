var eesnimi = "Shun";
var vanus = 36;
console.log("yo");
//npx tsc tervitus.ts - chto eto
console.log("Tere, " + eesnimi);
if (vanus < 6) {
    console.log("tasuta");
}
else {
    if (vanus <= 14) {
        console.log("Palun osta laste pilet");
    }
    else {
        console.log("Palun osta täispilet");
    }
}
var symbols = [];
for (var nr = 0; nr < vanus; nr++) {
    symbols.push("*");
}
console.log(symbols.join(""));
