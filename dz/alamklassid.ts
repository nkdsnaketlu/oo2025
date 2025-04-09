abstract class Character {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract attack(): void;

    move(): void{
        console.log(`${this.name} moved forward`);
    }
}

class Wizard extends Character {
    attack(): void {
        console.log(`Despite the room size, ${this.name} casted fireball! 🔥`);
    }
}

class Rogue extends Character {
    sneak(): void{
        console.log(`${this.name} has vanished from enemies eyesight! 😶‍🌫️`);
        
    }

    attack(): void {
        console.log(`${this.name} attacked from behind! 🗡️`);
    }
}

class Barbarian extends Character {
    rage(): void {
        console.log(`${this.name} is in rage! ❤️‍🔥`);
    }

    attack(): void {
        console.log(`${this.name} swings her battleaxe! 🪓`);
    }
}

function battleScene(characters: Character[]) {
    for (let char of characters) {
        if (char instanceof Rogue) {
            char.sneak();
        } else if (char instanceof Barbarian) {
            char.rage();
        }
        char.move();
        char.attack();
        console.log('---');
    }
}

let team: Character[] = [
    new Barbarian("Karlach"),
    new Rogue("Astarion"),
    new Wizard("Gale")
];

battleScene(team);