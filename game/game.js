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
var Character = /** @class */ (function () {
    function Character() {
        this.health = 100;
        this.stamina = 100;
        this.damagePoints = 10;
    }
    Character.prototype.attack = function (enemy) {
        enemy.health = enemy.health - this.damagePoints;
        this.stamina = this.stamina - 10;
        console.log(enemy.name + "received " + this.damagePoints + 'damage!');
    };
    Character.prototype.defend = function () {
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
        return _this;
    }
    Player.prototype.addItem = function (item) {
        this.itemsInInventory.push(item);
        console.log(item.name + ' is added to ' + this.name + "'s inventory!");
    };
    Player.prototype.useItem = function (item) {
        if (item.type === "food" || item.name === "health potion") {
            if (this.health < this.maxHealth) {
                this.health = this.health + item.stats;
                console.log(this.name + " recovered " + item.stats + " points of health");
            }
            else {
                console.log('you already have full hp');
            }
        }
        else if (item.type === "potion") {
            if (item.name === 'stamina potion') {
                if (this.stamina < this.maxStamina) {
                    this.stamina = this.stamina + item.stats;
                    console.log(this.name + " recovered " + item.stats + " points of stamina");
                }
                else {
                    console.log('You already have full stamina');
                }
            }
            else if (item.name === "damage potion") {
                this.damagePoints = this.damagePoints + item.stats;
                console.log(this.name + " now deals " + this.damagePoints + " damage per attack!");
            }
        }
        else if (item.type === "weapon") {
            this.damagePoints == this.damagePoints + item.stats;
            console.log(this.name + ' has equipped ' + item.name + '!');
        }
        else {
            console.log('you used garbage, congrats 🥳');
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
        return _this;
    }
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
var apple = new Item('apple', 'food', 5);
var potion = new Item('stamina potion', 'potion', 15);
var fists = new Item('fists', 'weapon', 5);
var kiryu = new Player("Kiryu Kazuma", fists);
kiryu.useItem(fists);
kiryu.addItem(potion);
kiryu.addItem(apple);
