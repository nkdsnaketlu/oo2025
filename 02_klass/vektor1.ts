/*
Hambaharjad
1 kodus                                                 Masinkoodi käsklus
1 poest tulnud - koos pakendiga                         koos siseandmetega

20 - ühte suuremasse poodi karbis                       Programmeerimiskeele valmiskäsklus

1000 - poeketi tellimus - suurem pappkast               Oma loodudfunktsioon

3000 - euroalus ?                                       Klass / teek / moodul

120000 - merekonteiner                                  Komponent, ühendatud harjusarhitektuur
*/
class vektor {
    constructor(protected x:number, protected y:number) {}
    kuva():void{
        console.log(this.x, this.y);
        
    }
    pikkus():number{
        return Math.sqrt((this.x*this.x)+(this.y*this.y))   
    }
    liida(teine:vektor):vektor{
        return new vektor(this.x+teine.x, this.y+teine.y);
    }
    korrutamine(arv:number):vektor{
        return new vektor(this.x*arv, this.y*arv);
    }
    suurendaX():void{
        this.x+=1;
    }
    skalaarkorr(teine:vektor){
        return this.x*teine.x+this.y*teine.y;
    }
}

let v1:vektor=new vektor(3,5);
let vagun:vektor=new vektor(9,0);
let energia:number=v1.skalaarkorr(vagun);
console.log(energia);

let vektorid:vektor[]=[
    new vektor(1,3),
    new vektor(1,5),
    new vektor(3,3),
    new vektor(2,1),
];
let asukoht=vektorid[0]
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);      
}
asukoht.kuva();

v1.suurendaX();
v1.kuva();
v1.korrutamine(0).kuva();
console.log(v1.pikkus());
let v3:vektor=v1.liida(new vektor(1, 2));
v3.kuva();
/*let v4:vektor=v3.korrutamine(new vektor(0))
v4.kuva();*/
