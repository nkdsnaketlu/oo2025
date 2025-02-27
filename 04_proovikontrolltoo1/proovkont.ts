class X {
    arve:number;
    constructor(x:number) {
        this.arve = x;
    }
}

class Y {
    arve:number;
    constructor(y:number) {
        this.arve = y;
    }
}
let P = 0;
class Kolmnurk {
    x_cords:X[];
    y_cords:Y[];
    constructor(protected x : X[]=[], protected y : Y[]=[], protected canvas, protected j) {
        this.x_cords=x;
        this.y_cords=y;
    }
    addCoord(new_x:X, new_y:Y){
        this.x_cords.push(new_x);
        this.y_cords.push(new_y);
        console.log(new_x);
        console.log(this.x_cords);
        
        for (let i = 1; i < this.x_cords.length; i++) {
            const dx = this.x_cords[i].arve - this.x_cords[i - 1].arve;
            const dy = this.y_cords[i].arve - this.y_cords[i - 1].arve;
            P += Math.sqrt(dx * dx + dy * dy); // Add the distance to the perimeter
        }
        console.log("uus ümbermõõt on ",P);
        this.draw();
    }
    draw() {
        this.j.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.j.fillStyle = "white";
        this.j.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.j.strokeStyle = "black";

        this.j.beginPath();
        this.j.moveTo(this.x_cords[0].arve, this.y_cords[0].arve); 
        for (let i = 1; i < this.x_cords.length; i++) { 
            this.j.lineTo(this.x_cords[i].arve, this.y_cords[i].arve);
        }
        
        this.j.lineTo(this.x_cords[0].arve, this.y_cords[0].arve); 

        this.j.stroke();
    
}

let xid:X[]=[
    new X(1),
    new X(10),
    new X(20),
    new X(30)
];
let yid:Y[]=[
    new Y(30),
    new Y(20),
    new Y(10),
    new Y(40)
];

//let kolmnurk1 = new Kolmnurk([xid[1],xid[2],xid[3]], [yid[1],yid[2],yid[3]], document.getElementById("canvas"), canvas.getContext("2d"));
//let kolmnurk2 = new Kolmnurk([x3,x2,x1], [y3,y2,y1]);

//console.log(kolmnurk1.x_cords[1]);
//kolmnurk1.addCoord(xid[0],yid[0]);

