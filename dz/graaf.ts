//npx tsc graaf.ts
class Gosling{
    protected width: number;
    protected height: number=30;
   /* constructor(protected r: number, protected g, 
         protected startx: number, protected endx: number, 
          protected y: number){*/
        //this.width=this.endx-this.startx;
        constructor(protected r: number, protected g, protected canvas){
        this.draw();
    }
    setR(r:number){
        this.r=r;
        this.draw();
    }
    getR():number{
        return this.r;
    }
    draw(){
        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.g.fillStyle = `rgb(${Math.floor(150 - (this.r/2))}, 15, ${Math.floor(180 - (this.r/2))})`; 
        this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.g.strokeStyle = `rgb(${Math.floor(90 + this.r/2)}, 120, ${Math.floor(70 + this.r/2)})`;

        this.g.beginPath();
        this.g.moveTo(390, 153);
        this.g.lineTo(402, 82);
        this.g.lineTo(398, 71);
        this.g.lineTo(349, 40);
        this.g.lineTo(335, 36);
        this.g.lineTo(300, 27);
        this.g.lineTo(286, 26);
        this.g.lineTo(260, 28);
        this.g.lineTo(204, 48);
        this.g.lineTo(198, 55);
        this.g.lineTo(202, 65);
        this.g.lineTo(234, 56);
        this.g.lineTo(260, 54);
        this.g.lineTo(277, 54);
        this.g.lineTo(279, 80);
        this.g.lineTo(280, 65);
        this.g.lineTo(286, 54);
        this.g.lineTo(310, 59);
        this.g.lineTo(340, 86);
        this.g.lineTo(345, 96);
        this.g.lineTo(357, 164);
        this.g.lineTo(366, 154);
        this.g.lineTo(377, 151);
        this.g.lineTo(390, 153);
        this.g.lineTo(389, 188);
        this.g.lineTo(366, 215);
        this.g.lineTo(356, 210);
        this.g.lineTo(350, 236);
        this.g.lineTo(283, 298);
        this.g.lineTo(255, 302);
        this.g.lineTo(239, 299);
        this.g.lineTo(231, 296);
        this.g.lineTo(215, 287);
        this.g.lineTo(205, 255);
        this.g.lineTo(202, 227);
        this.g.lineTo(193, 199);
        this.g.lineTo(191, 182);
        this.g.lineTo(193, 161);
        this.g.lineTo(196, 137);
        this.g.lineTo(194, 129);
        this.g.lineTo(229, 126);
        this.g.lineTo(230, 135);
        this.g.lineTo(196, 137);
        this.g.lineTo(194, 129);
        this.g.lineTo(195, 107);
        this.g.lineTo(202, 65);
        this.g.stroke();

        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(254, 126);
        this.g.lineTo(254, 138);
        this.g.lineTo(291, 136);
        this.g.lineTo(313, 144);
        this.g.lineTo(289, 127);
        this.g.lineTo(254, 126);
        this.g.stroke();

        this.g.beginPath();//glaz1
        this.g.moveTo(212, 141);
        this.g.lineTo(213, 146);
        this.g.lineTo(216, 148);
        this.g.lineTo(220, 148);
        this.g.lineTo(223, 146);
        this.g.lineTo(226, 143);
        this.g.lineTo(231, 148);
        this.g.lineTo(218, 155);
        this.g.lineTo(206, 150);
        this.g.lineTo(207, 145);
        this.g.lineTo(213, 140);
        this.g.lineTo(213, 140);
        this.g.lineTo(215, 140);
        this.g.lineTo(221, 140);
        this.g.lineTo(226, 143);
        this.g.lineTo(232, 148);
        this.g.stroke();

        this.g.beginPath();//glaz 2
        this.g.moveTo(277, 144);
        this.g.lineTo(277, 151);
        this.g.lineTo(281, 153);
        this.g.lineTo(285, 152);
        this.g.lineTo(287, 147);//end
        this.g.lineTo(296, 151);
        this.g.lineTo(303, 155);
        this.g.lineTo(299, 154);
        this.g.lineTo(293, 156);
        this.g.lineTo(289, 156);
        this.g.lineTo(279, 157);
        this.g.lineTo(270, 156);
        this.g.lineTo(269, 153);
        this.g.lineTo(274, 144);
        this.g.lineTo(277, 144);
        this.g.lineTo(282, 145);
        this.g.lineTo(287, 147);
        this.g.stroke();

        this.g.beginPath();//nos
        this.g.moveTo(232, 155);
        this.g.lineTo(242, 155);
        this.g.lineTo(258, 160);
        this.g.lineTo(257, 166);
        this.g.lineTo(242, 208);
        this.g.lineTo(257, 166);

        this.g.lineTo(272, 175);
        this.g.lineTo(287, 180);
        this.g.lineTo(293, 181);
        this.g.lineTo(292, 188);
        this.g.lineTo(291, 204);
        this.g.lineTo(280, 204);
        this.g.lineTo(265, 199);
        this.g.lineTo(255, 197);
        this.g.lineTo(248, 196);
        this.g.lineTo(241, 207);
        this.g.lineTo(229, 202);
        this.g.lineTo(224, 200);
        this.g.lineTo(218, 204);
        this.g.lineTo(214, 204);
        this.g.lineTo(212, 194);
        this.g.lineTo(207, 184);
        this.g.lineTo(207, 178);
        this.g.lineTo(218, 173);
        this.g.lineTo(224, 170);
        this.g.lineTo(229, 165);
        this.g.lineTo(232, 155);
        this.g.lineTo(230, 175);
        this.g.lineTo(229, 182);
        this.g.lineTo(222, 195);
        this.g.lineTo(225, 201);
        this.g.lineTo(228, 209);
        this.g.lineTo(240, 213);
        this.g.lineTo(253, 214);
        this.g.lineTo(252, 211);
        this.g.lineTo(254, 210);
        this.g.lineTo(258, 210);
        this.g.lineTo(263, 211);
        this.g.lineTo(268, 205);
        this.g.lineTo(266, 200);
        this.g.stroke();

        this.g.beginPath();//rot
        this.g.moveTo(215, 242);
        this.g.lineTo(223, 238);
        this.g.lineTo(230, 237);
        this.g.lineTo(243, 239);
        this.g.lineTo(256, 242);
        this.g.lineTo(269, 244);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(209, 225);
        this.g.lineTo(210, 235);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(219, 216);
        this.g.lineTo(219, 229);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(230, 215);
        this.g.lineTo(231, 227);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(241, 217);
        this.g.lineTo(241, 226);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(250, 218);
        this.g.lineTo(250, 230);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(265, 220);
        this.g.lineTo(267, 234);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(280, 230);
        this.g.lineTo(284, 244);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(211, 252);
        this.g.lineTo(218, 275);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(223, 268);
        this.g.lineTo(225, 290);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(234, 271);
        this.g.lineTo(239, 295);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(254, 273);
        this.g.lineTo(262, 298);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(273, 268);
        this.g.lineTo(280, 292);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(287, 259);
        this.g.lineTo(297, 279);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(302, 250);
        this.g.lineTo(303, 274);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(321, 239);
        this.g.lineTo(327, 253);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(335, 192);
        this.g.lineTo(347, 235);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(333, 245);
        this.g.lineTo(331, 215);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(343, 191);
        this.g.lineTo(350, 203);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(344, 172);
        this.g.lineTo(352, 184);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(353, 170);
        this.g.lineTo(347, 159);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(115, 365);
        this.g.lineTo(116, 334);
        this.g.lineTo(123, 321);
        this.g.lineTo(134, 312);
        this.g.lineTo(149, 307);
        this.g.lineTo(161, 307);
        this.g.lineTo(161, 295);
        this.g.lineTo(171, 279);
        this.g.lineTo(189, 264);
        this.g.lineTo(205, 255);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(231, 296);
        this.g.lineTo(231, 320);
        this.g.lineTo(227, 335);    
        this.g.lineTo(224, 352);
        this.g.lineTo(228, 365);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(346, 376);
        this.g.lineTo(354, 365);
        this.g.lineTo(353, 331);
        this.g.lineTo(365, 291);
        this.g.lineTo(362, 264);
        this.g.lineTo(364, 214);
        this.g.lineTo(386, 224);
        this.g.lineTo(396, 235);
        this.g.lineTo(400, 240);
        this.g.lineTo(413, 265);
        this.g.lineTo(420, 272);
        this.g.lineTo(438, 281);
        this.g.lineTo(446, 289);
        this.g.lineTo(455, 307);
        this.g.lineTo(457, 327);
        this.g.lineTo(491, 359);
        this.g.lineTo(514, 379);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(165, 320);
        this.g.lineTo(165, 336);
        this.g.lineTo(169, 344);
        this.g.lineTo(170, 332);
        this.g.lineTo(174, 311);
        this.g.lineTo(179, 326);
        this.g.lineTo(183, 338);
        this.g.lineTo(192, 340);
        this.g.lineTo(206, 336);
        this.g.lineTo(215, 325);
        this.g.lineTo(225, 308);
        this.g.stroke();

        this.g.beginPath();
        this.g.moveTo(370, 364);
        this.g.lineTo(394, 380);
        this.g.lineTo(424, 386);
        this.g.lineTo(443, 361);
        this.g.lineTo(453, 337);
        this.g.stroke();
    }
}