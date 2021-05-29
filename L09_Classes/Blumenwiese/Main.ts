namespace L09_2_Blumenwiese {
    /*
   Aufgabe: L09.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 23.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09 Asteroids für die Animation
   */

   window.addEventListener("load", handleLoad);
   export let crc2d: CanvasRenderingContext2D;
   interface Vector {
       x: number;
       y: number;
   }
   let imgData: ImageData;
   
   
   export let pinkPurple: string [] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
   export let colorfulColors: string[] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
   
   function handleLoad(): void {
       console.log("Hello");
       let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
       if (!canvas)
           return;
       crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

       drawBackground();
       drawSun({x: 100, y: 120});
       drawMountains({x: 0, y: 320}, 60, 180, "grey", "White");
       drawMountains({x: 0, y: 320}, 20, 120, "black", "lightgrey");
       drawHouse({x: 0, y: 340}, 80, -40);
       //drawBee();

       for (let i: number = 0; i < createRandomNum(35, 50); i ++) {
       let flower: Flower = new Flower(true);
       flower.draw();
       }
       //let cloud: Cloud = new Cloud();
       //cloud.draw();
        /*brauche ich das hier schon oder erst in update?*/
       imgData = crc2d.getImageData(0, 0, crc2d.canvas.width, crc2d.canvas.height);
       crc2d.save();
       
       window.setInterval(update, 20);
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

   let cloud: Cloud = new Cloud();
   let bee: Bee = new Bee();

   function update(): void {
       crc2d.clearRect(0, 0, 360, 720);
       //crc2d.restore();
       crc2d.putImageData(imgData, 0, 0);
       //crc2d.fillRect(0, 0, 360, 720);
       cloud.move(1 / 50);
       cloud.draw(); 
       for (let i: number = 0; i < 5; i++) {
       bee.move(1 / 50);
       bee.draw();
      }
       


   }




}