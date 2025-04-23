function logMessage(message) {
    const logBox = document.getElementById("battle-log");
    if (!logBox) {
        console.warn("LOG BOX NOT FOUND");
        return;
    }
    const entry = document.createElement("div");
    entry.textContent = message;
    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
}

abstract class Character {
    name: string;
    level: number;
    health: number = 100;
    maxHealth: number = 100;
    stamina: number = 100;
    maxStamina: number = 100;
    damagePoints: number = 10;
    weapon: Item;
    isDefeated: boolean = false;

    abstract defeat(): void;

    attack(enemy:Character):void {
        if (enemy.health <= 0) {
            enemy.defeat();
        } else {
            enemy.health -= this.damagePoints;
            this.stamina -= (10 + (this.weapon.stats/2));
            /*console.log(`${enemy.name} received ${this.damagePoints} damage!`);*/
            logMessage(`${enemy.name} received ${this.damagePoints} damage!`);
        }
    }

    defend(enemy:Character):void {
        this.health = this.health - (enemy.damagePoints/2);
        this.stamina = this.stamina - 25;
        /*console.log(this.name + " defended himself from " + enemy.name + ' attack!');*/
        logMessage(this.name + " defended himself from " + enemy.name + ' attack!');
    }
}

class Player extends Character {
    itemsInInventory: Item[] = [];
    exp: number;
    
    constructor (name: string, weapon: Item) {
        super();
        this.name = name;
        this.weapon = weapon;
        this.damagePoints = this.weapon.stats;
    }

    defeat(): void{
        if (this.health <= 0){
            this.isDefeated = true;
            logMessage('game over');
            logMessage('better luck next time!');
        }
    }

    victory(): void{

    }
    
    addItem(item:Item){
        this.itemsInInventory.push(item);
        logMessage(item.name + ' is added to ' + this.name + "'s inventory!");
        
    }
    
    useItem(item:Item){
        if (item.type === "food" || item.name === "health potion") {
            if (this.health < this.maxHealth) {
                this.health = this.health + item.stats;
                logMessage(this.name + " recovered " + item.stats + "HP");
            } else {
                logMessage('you already have full hp');
            }
        } else if (item.type === "potion") {
            if (item.name.includes("stamina")) {
                if (this.stamina < this.maxStamina) {
                    this.stamina = this.stamina + item.stats;
                    logMessage(this.name + " recovered " + item.stats + " points of stamina");
                    
                } else {
                    logMessage('You already have full stamina');
                }
            } else if (item.name === "damage potion") {
                this.damagePoints = this.damagePoints + item.stats;
                logMessage(this.name + " now deals " + this.damagePoints + " damage per attack!");
            } else if (item.name.includes("heal")) {
                this.health += item.stats;
                logMessage(this.name + " recovered " + item.stats + "HP");
            }
        } else if (item.type === "weapon") {
            this.damagePoints += item.stats;
            logMessage(this.name + ' has equipped ' + item.name + '!');
        } else {
            logMessage('you used garbage, congrats 🥳');
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
            logMessage(this.name + ' has leveled up!');
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
        this.weapon = weapon;
        this.damagePoints = weapon.stats;

    }

    defeat(): void{
        if (this.health <= 0){
            this.isDefeated = true;
        }
    }

    dropItem(enemy: Player){
        let randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber > this.chanceOfDrop) {
            let randomItem = this.typeOfLoot[Math.floor(Math.random() * this.typeOfLoot.length)];
            logMessage(this.name + ' has dropped ' + randomItem.name + '!');
            enemy.addItem(randomItem);
        } else {
            logMessage(this.name + ' was too broke 😥');
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

let item1 = new Item('onigiri', 'food', 5);
let item2 = new Item('stick', 'weapon', 1);
let item3 = new Item('Photo of a woman', 'else', 5);
let bear = new Item('Clive', 'else', 0);
let boo = new Item("hamster's food", 'food', 1);
let revscroll = new Item("used Scroll of Revivify", 'else', 0);
let water = new Item("Water bottle", 'food', 1);
let heal = new Item("Huge healing potion", 'potion', 100);
let majimaItems = [item1, item2, item3];
let minscItems = [boo, revscroll, water];
let karlachItems = [bear, heal, water];

let apple = new Item('Apple', 'food', 5);
let potion = new Item('Staminan Royale ', 'potion', 15);

let fists = new Item('fists', 'weapon', 5);
let longsword = new Item('longsword', 'weapon', 10);
let battleaxe = new Item('battleaxe', 'weapon', 20);
let enchstick = new Item('enchanted stick', 'weapon', 50);
let bat = new Item('Sturdy Baseball Bat', 'weapon', 25);
let weaponList = [fists, longsword, battleaxe, enchstick];

/*let kiryu = new Player("Kiryu Kazuma", fists);
kiryu.useItem(fists);
kiryu.addItem(potion);
kiryu.addItem(apple);*/

let majima = new Enemy('Goro Majima', bat, majimaItems, 9);
let minsc = new Enemy('Minsc', fists, minscItems, 2)
let karlach = new Enemy('Karlach', battleaxe, karlachItems, 5)

let enemiesList = [minsc, karlach, majima]

console.log(minsc.weapon.name);
