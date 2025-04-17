import { log } from "console";

abstract class Character {
    name: string;
    level: number;
    health: number = 100;
    maxHealth: number;
    stamina: number = 100;
    maxStamina: number;
    damagePoints: number = 10;
    weapon: Item;
    isDefeated: boolean = false;

    attack(enemy:Character):void {
        enemy.health -= this.damagePoints;
        this.stamina -= (10 + (this.weapon.stats/2));
        console.log(enemy.name + "received " + this.damagePoints + 'damage!');
    }

    defend(enemy:Character):void {
        this.health = this.health - (enemy.damagePoints/2);
        this.stamina = this.stamina - 25;
        console.log(this.name + " defended himself from " + enemy.name + ' attack!');
    }
}

class Player extends Character {
    itemsInInventory: Item[] = [];
    exp: number;
    
    constructor (name: string, weapon: Item) {
        super();
        this.name = name;
        this.weapon = weapon;
    }

    defeat(): void{
        if (this.health <= 0){
            this.isDefeated = true;
            console.log('game over');
            console.log('better luck next time!');
        }
    }

    victory(): void{

    }
    
    addItem(item:Item){
        this.itemsInInventory.push(item);
        console.log(item.name + ' is added to ' + this.name + "'s inventory!");
        
    }
    
    useItem(item:Item){
        if (item.type === "food" || item.name === "health potion") {
            if (this.health < this.maxHealth) {
                this.health = this.health + item.stats;
                console.log(this.name + " recovered " + item.stats + " points of health");
            } else {
                console.log('you already have full hp');
            }
        } else if (item.type === "potion") {
            if (item.name.includes("stamina")) {
                if (this.stamina < this.maxStamina) {
                    this.stamina = this.stamina + item.stats;
                    console.log(this.name + " recovered " + item.stats + " points of stamina");
                    
                } else {
                    console.log('You already have full stamina');
                }
            } else if (item.name === "damage potion") {
                this.damagePoints = this.damagePoints + item.stats;
                console.log(this.name + " now deals " + this.damagePoints + " damage per attack!");
            }
        } else if (item.type === "weapon") {
            this.damagePoints += item.stats;
            console.log(this.name + ' has equipped ' + item.name + '!');
        } else {
            console.log('you used garbage, congrats 🥳');
        }
    }

    recountDamage():void {
        this.damagePoints += this.level*2 + this.weapon.stats + 10;
    }

    levelUp(): void{
        if (this.exp > 99) {
            this.level += 1;
            this.maxHealth += 10;
            this.health = this.maxHealth;
            this.maxStamina += 10;
            this.stamina = this.maxStamina;
            console.log(this.name + ' has leveled up!');
            this.recountDamage();
        }
    }
}
class Enemy extends Character {
    typeOfLoot: Item[]=[];
    chanceOfDrop: number;
    constructor (name: string, weapon: Item, typeOfLoot:Item[], chanceOfDrop:number) {
        super();
        this.name = name;
        this.typeOfLoot = typeOfLoot;
        this.chanceOfDrop = chanceOfDrop;
    }

    defeat(): void{
        if (this.health <= 0){
            this.isDefeated = true;
        }
    }

    dropItem(enemy: Player){
        let randomNumber = Math.random() * 10;
        if (randomNumber < this.chanceOfDrop) {
            let  randomItem =  this.typeOfLoot[Math.floor(Math.random() * 3)];
            console.log(this.name + ' has dropped ' + randomItem.name + '!');
            enemy.addItem(randomItem);
        } else {
            console.log(this.name + ' was too broke 😥');
        }
    }
}

class Item {
    name: string;
    type: string;
    stats: number;
    constructor (name: string, type:string, stats: number) {
        this.name = name;
        this.type = type;
        this.stats = stats;
    }
}

let item1 = new Item('item', 'food', 5);
let item2 = new Item('item2', 'weapon', 5);
let item3 = new Item('item3', 'potion', 5);
let enemyItems = [item1, item2, item3];

let apple = new Item('Apple', 'food', 5);
let potion = new Item('Staminan Royale ', 'potion', 15);

let fists = new Item('fists', 'weapon', 5);
let longsword = new Item('longsword', 'weapon', 10);
let battleaxe = new Item('battleaxe', 'weapon', 20);
let weaponList = [fists, longsword, battleaxe];

let kiryu = new Player("Kiryu Kazuma", fists);
kiryu.useItem(fists);
kiryu.addItem(potion);
kiryu.addItem(apple);
