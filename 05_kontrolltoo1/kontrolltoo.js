/*Veekeedukann
1 sm3 = 1 ml
1c = 1 kalor = 4.14 dj
1200w
t = W / P
P*t = W/4.19
P = w / t
1200 * 60 =
watts = joules / seconds

Т – время нагрева воды, час
V – объем водонагревательного бака (л)
tк – конечная температура воды, °С  (обычно 60°C)
tн – начальная температура воды, °С
W – электрическая мощность нагревательного элемента — ТЭНа, кВТ
T= 0,00117*V*(tl-ta)/W
tk =
T = (0,00117*this.volume*(temp - this.temp))/this.power
*/
var Kann = /** @class */ (function () {
    function Kann(vett, temp) {
        this.volume = 2000;
        this.vett = vett;
        this.temp = temp;
        this.power = 1200;
    }
    Kann.prototype.teatis = function () {
        if (this.temp >= 80) {
            return 'vee temperatuur on juba kõrge';
        }
    };
    Kann.prototype.waterHeatingTemp = function (temp) {
        return "Kann sisse l\u00FClitatakse ".concat((((this.vett * (4.19 * (80 - temp))) / this.power)).toFixed(2), " sekundiks");
    };
    Kann.prototype.waterHeatingSek = function (sekundid) {
        //return (sekundid * this.power)/4.19
        //T= 0,00117*V*(tl-ta)/W
        return "".concat(sekundid, " sekundiga kann kuumeneb kuni umbes ").concat(Math.round(this.temp + (((sekundid / 3600) * (this.power / 1000)) / 0.00117 * (this.volume / 1000))), "\u00B0C");
    };
    Kann.prototype.lisaVett = function (hulk, temp) {
        if (this.vett + hulk < this.volume) {
            this.temp = Math.round((((this.vett / 1000) * this.temp) + ((hulk / 1000) * temp)) / ((this.vett / 1000) + (hulk / 1000)));
            this.vett = this.vett + hulk;
            return "N\u00FC\u00FCd kannis on ".concat(this.vett, " ml ").concat(this.temp, "\u00B0C vett");
        }
        else {
            return 'on lisatud liiga palju vett!';
        }
    };
    return Kann;
}());
/*
tс = (m1*t1 + m2*t2 + … + mn*tn)/(m1 + m2 + … + mn)

m1, m2 … mn - масса воды, кг

t1, t2 … tn - температура воды, °C
*/
var k1 = new Kann(500, 40);
//console.log(k1.waterHeating(k1.temp));
console.log(k1.lisaVett(100, 20));
console.log(k1.lisaVett(1600, 60));
console.log(k1.waterHeatingTemp(20));
console.log(k1.waterHeatingSek(65));
