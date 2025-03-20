export class Word {
    constructor(protected text:string){}
    countA(): number{
        return (this.text.match(/a/gi) || []).length;
    }

    countVowels(): number{
        return (this.text.match(/[aeiou]/gi) || []).length;
    }
}