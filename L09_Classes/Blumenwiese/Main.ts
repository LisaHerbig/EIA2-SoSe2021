namespace L09_2_Blumenwiese {
    /*
   Aufgabe: L08.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 14.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09
   */

   window.addEventListener("load", handleLoad);
   export let crc2d: CanvasRenderingContext2D;
   interface Vector {
       x: number;
       y: number;
   }
   //let flowerTypes: Path2D[] = [];
   export let pinkPurple: string [] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
   export let colorfulColors: string[] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
   console.log(colorfulColors.length);
   
   function handleLoad(): void {
       console.log("Hello");
       let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
       if (!canvas)
           return;
       crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

       drawBackground();
       drawSun({x: 100, y: 120});
       //drawCloud({x: 290, y: 60}, {x: 100, y: 60}, 30);
       //drawCloud({x: 200, y: 140}, {x: 80, y: 30}, 17);
       drawMountains({x: 0, y: 320}, 60, 180, "grey", "White");
       drawMountains({x: 0, y: 320}, 20, 120, "black", "lightgrey");
       drawHouse({x: 0, y: 340}, 80, -40);
       drawBee();
       for (let i: number = 0; i < createRandomNum(35, 50); i ++) {
       let flower: Flower = new Flower(true);
       flower.draw();
       crc2d.getImageData(0, 0, 360, 720);
       //Flower
       }
       
       //console.log(flowerTypes);
       
   }

   export function createRandomNum(_min: number, _max: number): number {
       return Math.floor(Math.random() * (_max - _min + 1) + _min);
   }

   function drawBackground(): void {
       let gradient: CanvasGradient = crc2d.createLinearGradient(0, 0, 0, crc2d.canvas.height);
       gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
       gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
       gradient.addColorStop(0.4, "HSLA(55, 100%, 50%, 1");
       gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");

       crc2d.fillStyle = gradient;
       crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
   }

   function drawSun(_position: Vector): void {
       let r1: number = 20;
       let r2: number = 110;
       let gradient: CanvasGradient = crc2d.createRadialGradient(0, 0, r1, 0, 0, r2);

       gradient.addColorStop(0, "HSLA(61, 100%, 75%, 1)");
       gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

       crc2d.save();
       crc2d.translate(_position.x, _position.y);
       crc2d.fillStyle = gradient;
       crc2d.arc(0, 0, r2, 0, 2 * Math.PI);
       crc2d.fill();
       crc2d.restore();

   }

   function drawCloud(_position: Vector, _size: Vector, radiusParticle: number): void {
       let nParticles: number = 25;
       let particle: Path2D = new Path2D();
       let gradient: CanvasGradient = crc2d.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

       particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
       gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.4)");
       gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

       crc2d.save();
       crc2d.translate(_position.x, _position.y);
       crc2d.fillStyle = gradient;

       for (let drawn: number = 0; drawn < nParticles; drawn++) {
           crc2d.save();
           let x: number = (Math.random() - 0.5) * _size.x;
           let y: number = - (Math.random() * _size.y);
           crc2d.translate(x, y);
           crc2d.fill(particle);
           crc2d.restore();
       }
       crc2d.restore();
   }

   function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
       console.log("hi");
       
       let stepMin: number = 10;
       let stepMax: number = 50;
       let x: number = 0;

       crc2d.save();
       crc2d.translate(_position.x, _position.y);
       crc2d.beginPath();
       crc2d.moveTo(0, 0);
       crc2d.lineTo(0, -_max);

       do {
           x += stepMin + createRandomNum(stepMin, stepMax);
           let y: number = -_min - createRandomNum(_min, _max);

           crc2d.lineTo(x, y);
       } while (x < crc2d.canvas.width);

       crc2d.lineTo(x, 0);
       crc2d.closePath();

       let gradient: CanvasGradient = crc2d.createLinearGradient(0, 0, 0, -_max);
       gradient.addColorStop(0, _colorLow);
       gradient.addColorStop(0.7, _colorHigh);

       crc2d.fillStyle = gradient;
       crc2d.fill();

       crc2d.restore(); 
   }

   function drawHouse(_position: Vector, _stepSide: number, _stepUp: number): void {
       crc2d.save();
       crc2d.beginPath();
       crc2d.moveTo(_position.x, _position.y);
       crc2d.lineTo(_stepSide, _position.y);
       crc2d.lineTo(_stepSide, _position.y + _stepUp);
       crc2d.lineTo(-_stepSide, _position.y + _stepUp);
       crc2d.closePath();
       crc2d.fillStyle = "HSLA(30, 100%, 22%, 1)";
       crc2d.fill();
       crc2d.restore();

       crc2d.save();
       crc2d.beginPath();
       crc2d.moveTo(_position.x, _position.y + _stepUp);
       crc2d.lineTo(_position.x + _stepSide, _position.y + _stepUp);
       crc2d.lineTo((_position.x + _stepSide) - _stepSide / 2 , _position.y + 2 * _stepUp);
       crc2d.closePath();
       crc2d.fillStyle = "HSLA(9, 100%, 58%, 1)";
       crc2d.fill();
       crc2d.restore();
   }


   export function drawFlowerStem(_positionStem: Vector): void {
       crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
       crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);   
   }

   function drawBee(): void {

//body
       crc2d.save();
       crc2d.beginPath();
       crc2d.ellipse(200, 500, 20, 10, 0, 0, 2 * Math.PI);
       crc2d.save();
       crc2d.translate(198, 495);
//sting      
       crc2d.moveTo(20, 1);
       crc2d.lineTo(30, 5);
       crc2d.lineTo(20, 9);
       crc2d.lineTo(20, 1);
       crc2d.fillStyle = "Black";
       crc2d.fill();
       crc2d.stroke();
//Wing back
       createWing(-10, 0);

//Stripes
       crc2d.beginPath();
       crc2d.moveTo(20, -1);
       crc2d.lineTo(20, 11);
       crc2d.moveTo(10, -5);
       crc2d.lineTo(10, 15);

       crc2d.moveTo(0, -6);
       crc2d.lineTo(0, 16);
       crc2d.strokeStyle = "Yellow";
       crc2d.lineWidth = 3;
       crc2d.stroke();
//Eye
       crc2d.beginPath();
       crc2d.arc(-10, 2, 1, 0, 2 * Math.PI);
       crc2d.strokeStyle = "White";
       crc2d.stroke();
       //crc2d.restore();
//Wing Front
       createWing(10, 10);
       crc2d.restore();
   }

   function createWing(_direction: number, _x: number): void {
    crc2d.save();
    crc2d.beginPath();
    crc2d.ellipse(_x, -12, 4, 8, _direction, 0, 2 * Math.PI);
    crc2d.strokeStyle = "Blue";
    crc2d.lineWidth = 1;
    crc2d.fillStyle = "Lightblue";
    crc2d.fill();
    crc2d.stroke();
    crc2d.restore();

   }


}