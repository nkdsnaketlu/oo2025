var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function logMessage(message) {
    var logBox = document.getElementById("battle-log");
    if (!logBox) {
        console.warn("LOG BOX NOT FOUND");
        return;
    }
    var entry = document.createElement("div");
    entry.textContent = message;
    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
}
var Character = /** @class */ (function () {
    function Character() {
        this.health = 100;
        this.maxHealth = 100;
        this.stamina = 100;
        this.maxStamina = 100;
        this.damagePoints = 10;
        this.isDefeated = false;
    }
    Character.prototype.attack = function (enemy) {
        if (enemy.health <= 0) {
            enemy.defeat();
        }
        else {
            enemy.health -= this.damagePoints;
            this.stamina -= (10 + (this.weapon.stats / 2));
            /*console.log(`${enemy.name} received ${this.damagePoints} damage!`);*/
            logMessage("".concat(enemy.name, " received ").concat(this.damagePoints, " damage!"));
        }
    };
    Character.prototype.defend = function (enemy) {
        this.health = this.health - (enemy.damagePoints / 2);
        this.stamina = this.stamina - 25;
        /*console.log(this.name + " defended himself from " + enemy.name + ' attack!');*/
        logMessage(this.name + " defended himself from " + enemy.name + ' attack!');
    };
    return Character;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, weapon) {
        var _this = _super.call(this) || this;
        _this.itemsInInventory = [];
        _this.name = name;
        _this.weapon = weapon;
        _this.damagePoints = _this.weapon.stats;
        return _this;
    }
    Player.prototype.defeat = function () {
        if (this.health <= 0) {
            this.isDefeated = true;
            logMessage('game over');
            logMessage('better luck next time!');
        }
    };
    Player.prototype.victory = function () {
    };
    Player.prototype.addItem = function (item) {
        this.itemsInInventory.push(item);
        logMessage(item.name + ' is added to ' + this.name + "'s inventory!");
    };
    Player.prototype.useItem = function (item) {
        if (item.type === "food" || item.name === "health potion") {
            if (this.health < this.maxHealth) {
                this.health = this.health + item.stats;
                logMessage(this.name + " recovered " + item.stats + "HP");
            }
            else {
                logMessage('you already have full hp');
            }
        }
        else if (item.type === "potion") {
            if (item.name.includes("stamina")) {
                if (this.stamina < this.maxStamina) {
                    this.stamina = this.stamina + item.stats;
                    logMessage(this.name + " recovered " + item.stats + " points of stamina");
                }
                else {
                    logMessage('You already have full stamina');
                }
            }
            else if (item.name === "damage potion") {
                this.damagePoints = this.damagePoints + item.stats;
                logMessage(this.name + " now deals " + this.damagePoints + " damage per attack!");
            }
            else if (item.name.includes("heal")) {
                this.health += item.stats;
                logMessage(this.name + " recovered " + item.stats + "HP");
            }
        }
        else if (item.type === "weapon") {
            this.damagePoints += item.stats;
            logMessage(this.name + ' has equipped ' + item.name + '!');
        }
        else {
            logMessage('you used garbage, congrats 🥳');
        }
    };
    Player.prototype.recountDamage = function () {
        this.damagePoints += this.level * 2 + this.weapon.stats + 10;
    };
    Player.prototype.levelUp = function () {
        if (this.exp > 99) {
            this.level += 1;
            this.maxHealth += 10;
            this.health = this.maxHealth;
            this.maxStamina += 10;
            this.stamina = this.maxStamina;
            logMessage(this.name + ' has leveled up!');
            this.recountDamage();
        }
    };
    return Player;
}(Character));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, weapon, typeOfLoot, chanceOfDrop) {
        var _this = _super.call(this) || this;
        _this.typeOfLoot = [];
        _this.name = name;
        _this.typeOfLoot = typeOfLoot;
        _this.chanceOfDrop = chanceOfDrop;
        _this.weapon = weapon;
        _this.damagePoints = weapon.stats;
        return _this;
    }
    Enemy.prototype.defeat = function () {
        if (this.health <= 0) {
            this.isDefeated = true;
        }
    };
    Enemy.prototype.dropItem = function (enemy) {
        var randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber > this.chanceOfDrop) {
            var randomItem = this.typeOfLoot[Math.floor(Math.random() * this.typeOfLoot.length)];
            logMessage(this.name + ' has dropped ' + randomItem.name + '!');
            enemy.addItem(randomItem);
        }
        else {
            logMessage(this.name + ' was too broke 😥');
        }
    };
    return Enemy;
}(Character));
var Item = /** @class */ (function () {
    function Item(name, type, stats) {
        this.name = name;
        this.type = type;
        this.stats = stats;
    }
    return Item;
}());
var item1 = new Item('onigiri', 'food', 5);
var item2 = new Item('stick', 'weapon', 1);
var item3 = new Item('Photo of a woman', 'else', 5);
var bear = new Item('Clive', 'else', 0);
var boo = new Item("hamster's food", 'food', 1);
var revscroll = new Item("used Scroll of Revivify", 'else', 0);
var water = new Item("Water bottle", 'food', 1);
var heal = new Item("Huge healing potion", 'potion', 100);
var majimaItems = [item1, item2, item3];
var minscItems = [boo, revscroll, water];
var karlachItems = [bear, heal, water];
var apple = new Item('Apple', 'food', 5);
var potion = new Item('Staminan Royale ', 'potion', 15);
var fists = new Item('fists', 'weapon', 5);
var longsword = new Item('longsword', 'weapon', 10);
var battleaxe = new Item('battleaxe', 'weapon', 20);
var enchstick = new Item('enchanted stick', 'weapon', 50);
var bat = new Item('Sturdy Baseball Bat', 'weapon', 25);
var weaponList = [fists, longsword, battleaxe, enchstick];
/*let kiryu = new Player("Kiryu Kazuma", fists);
kiryu.useItem(fists);
kiryu.addItem(potion);
kiryu.addItem(apple);*/
var majima = new Enemy('Goro Majima', bat, majimaItems, 9);
var minsc = new Enemy('Minsc', fists, minscItems, 2);
var karlach = new Enemy('Karlach', battleaxe, karlachItems, 5);
var enemiesList = [minsc, karlach, majima];
console.log(minsc.weapon.name);
