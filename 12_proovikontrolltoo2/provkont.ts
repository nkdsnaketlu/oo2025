export interface Counter{
    getAmount(reqletter: string): number;
}

export abstract class Text implements Counter{
    abstract getContent(): string;

    getAmount(reqletter: string): number {
        let count = 0;
        for (const ch of this.getContent()){
            if(ch===reqletter){
                count++;
            }
        }
        return count;
    }clear
    

}

export class Sentence implements Counter{
    private words:Word[]=[];

    constructor(text:string){
        const wordString=text.split(' ');
        this.words=wordString.map(wordStr => new Word(wordStr))
    }
    getAmount(reqletter: string): number {
        let total = 0;
        for (const word of this.words) {
            total += word.getAmount(reqletter);
        }
        return total;
    }
}

export class Word implements Counter{
    word:string;
    lenght:number;
    constructor (word: string) {
        this.word = word;
        this.lenght = word.length;
    }

    getAmount(reqletter: string):number {
        let amount = 0;

        for (let i = 0; i < this.lenght; i++) {
            let letter = this.word[i];

            if (letter === reqletter) {
                amount++;
            }
        }

        return amount;
    }
}