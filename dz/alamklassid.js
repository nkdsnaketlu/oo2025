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
    function Character(name) {
        this.name = name;
    }
    Character.prototype.move = function () {
        console.log("".concat(this.name, " moved forward"));
    };
    return Character;
}());
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.attack = function () {
        console.log("Despite the room size, ".concat(this.name, " casted fireball! \uD83D\uDD25"));
    };
    return Wizard;
}(Character));
var Rogue = /** @class */ (function (_super) {
    __extends(Rogue, _super);
    function Rogue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rogue.prototype.sneak = function () {
        console.log("".concat(this.name, " has vanished from enemies eyesight! \uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F"));
    };
    Rogue.prototype.attack = function () {
        console.log("".concat(this.name, " attacked from behind! \uD83D\uDDE1\uFE0F"));
    };
    return Rogue;
}(Character));
var Barbarian = /** @class */ (function (_super) {
    __extends(Barbarian, _super);
    function Barbarian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Barbarian.prototype.rage = function () {
        console.log("".concat(this.name, " is in rage! \u2764\uFE0F\u200D\uD83D\uDD25"));
    };
    Barbarian.prototype.attack = function () {
        console.log("".concat(this.name, " swings her battleaxe! \uD83E\uDE93"));
    };
    return Barbarian;
}(Character));
function battleScene(characters) {
    for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
        var char = characters_1[_i];
        if (char instanceof Rogue) {
            char.sneak();
        }
        else if (char instanceof Barbarian) {
            char.rage();
        }
        char.move();
        char.attack();
        console.log('---');
    }
}
var team = [
    new Barbarian("Karlach"),
    new Rogue("Astarion"),
    new Wizard("Gale")
];
battleScene(team);
