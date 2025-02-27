/*
Скользящая средняя

* Создайте функцию, чтобы найти среднее арифметическое трех чисел. Попробуй.

* Создайте функцию для поиска скользящего среднего массива. На выходе получается массив, который на два элемента короче входного, и каждый элемент которого имеет среднее значение соответствующего элемента входного массива, а также его следующего и следующего за ним элемента.

* Создайте класс, к экземпляру которого можно добавить счет-фактуру с помощью соответствующей команды. Вторая команда может запросить скользящий средний массив этих чисел в соответствии с инструкциями в предыдущем пункте. Скомпилируйте код таким образом, чтобы при добавлении нового числа в экземпляр выполнялось как можно меньше новых вычислений (т. е. не будет пересчитывать весь результат с начала массива)
*/
//let arved:number[]=[];
class Massive {
    arved:number[];
    constructor(protected arv: number[]){
        this.arved = [...arv];
        /*for (let i = 0; i < arv.length; i++) {
            this.arved.push(arv[i]);
        }*/
    }
    keskmine(arv1:number, arv2:number, arv3:number):number{
        let kesk:number = ((arv1+arv2+arv3)/3);
        console.log(kesk);
        return kesk;
    }
    
    libisev_keskmine(numbrid:number[]){
        for (let i = 0; i < (numbrid.length-2); i++) {
            this.keskmine(numbrid[i], numbrid[i+1],numbrid[i+2])
            //return this.kesk;
        }
    }
    addNumber(uusarv:number){
        this.arved.push(uusarv);
    }
    getNumbers(): number[] {
        return this.arved;
    }

}

let massive = new Massive([1,2,5,3,3]);
console.log(massive.getNumbers());


/*function keskmine(arv1:number, arv2:number, arv3:number):number{
    let kesk:number = ((arv1+arv2+arv3)/3);
    console.log(kesk);
    return kesk;
}

function libisev_keskmine(numbrid:number[]){
    for (let i = 0; i < (numbrid.length-2); i++) {
        keskmine(numbrid[i], numbrid[i+1],numbrid[i+2])
        //return this.kesk;
    }
}

//let massive:number[]=[1,2,5,3,3]
//keskmine(massive[0],massive[1],massive[2])
libisev_keskmine(massive);*/




