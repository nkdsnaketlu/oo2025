/*
Hambaharjad
1 kodus                                                 Masinkoodi käsklus
1 poest tulnud - koos pakendiga                         koos siseandmetega

20 - ühte suuremasse poodi karbis                       Programmeerimiskeele valmiskäsklus

1000 - poeketi tellimus - suurem pappkast               Oma loodudfunktsioon

3000 - euroalus ?                                       Klass / teek / moodul

120000 - merekonteiner                                  Komponent, ühendatud harjusarhitektuur
*/
var vektor = /** @class */ (function () {
    function vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    vektor.prototype.pikkus = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    vektor.prototype.liida = function (teine) {
        return new vektor(this.x + teine.x, this.y + teine.y);
    };
    vektor.prototype.korrutamine = function (arv) {
        return new vektor(this.x * arv, this.y * arv);
    };
    vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    vektor.prototype.skalaarkorr = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    return vektor;
}());
var v1 = new vektor(3, 5);
var vagun = new vektor(9, 0);
var energia = v1.skalaarkorr(vagun);
console.log(energia);
var vektorid = [
    new vektor(1, 3),
    new vektor(1, 5),
    new vektor(3, 3),
    new vektor(2, 1),
];
var asukoht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
v1.suurendaX();
v1.kuva();
v1.korrutamine(0).kuva();
console.log(v1.pikkus());
var v3 = v1.liida(new vektor(1, 2));
v3.kuva();
/*let v4:vektor=v3.korrutamine(new vektor(0))
v4.kuva();*/
