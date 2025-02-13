class Person {
    constructor (protected name:string,protected surname:string, protected age:number, protected occupation:string){}
    getFullName():string{
        return this.name + " " + this.surname
    }
    getFullInfo():any{
        return  this.name + " " + this.surname + " " + this.age + " aastat vana\n" + this.occupation
    }
}
let person:Person = new Person('Keanu', 'Reeves', 60, "näitleja");
//console.log(person.getFullName())
console.log(person.getFullInfo())


/*
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
    */