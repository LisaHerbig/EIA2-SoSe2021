namespace L11_2_Blumenwiese {

    let pinkPurple: string [] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    let colorfulColors: string[] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))", "HSLA(65, 100%, 95%, 0.9)"];
 
    //Flower 1
    export function drawFlower1(_position: Vector): void {
              let nLeaves: number = 7;
              let rMax: number = 7;
              let x: number = 0;
              let y: number = 0;
              crc2d.save();
              drawFlowerStem(_position);
              for (let drawn: number = 0; drawn < nLeaves; drawn++) {
                  crc2d.save();
                  switch (drawn) {
                      case 0:
                          x = - 5;
                          y = -20;
                          break;
                      case 1:
                          x = 5;
                          y = -20;
                          break;
                      case 2:
                          x = -4;
                          y = -30;
                          break;
                      case 3:
                          x = 4;
                          y = -30;
                          break;
                      case 4:
                          x = -3;
                          y = -37;
                          break;
                      case 5:
                          x = 3;
                          y = -37;
                          break;
                      case 6:
                          x = 0;
                          y = -45;
                          break;
                      default:
                          console.log("something is wrong"); 
                  }
                  
                  crc2d.translate(x, y);
                  let posX: number = _position.x + 1;
                  let posY: number = _position.y - 1;
                  crc2d.beginPath();
                  crc2d.ellipse(posX, posY, rMax - drawn * 0.5 , rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
                  crc2d.fillStyle = pinkPurple [createRandomNum(0, 3)];
                  crc2d.closePath();
                  
                  crc2d.fill();
                  crc2d.restore();
              }
              crc2d.restore();
    }
    
    //Flower 2
    export function drawFlower2(_positionStem: Vector): void {
        let nLeaves: number = 5;
        drawFlowerStem(_positionStem);
        crc2d.save();
        
        let color: string = colorfulColors[createRandomNum(0, 12)];
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
           let rotate: number = 0;
           switch (drawn) {
            case 0:
                rotate = 0;
                break;
            case 1:
                rotate = 72;
                break;
            case 2:
                rotate = 144;
                break;
            case 3:
                rotate = 216;
                break;
            case 4:
                rotate = 288;
                break;
            default:
                console.log("Something is wrong");
                
            }
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2 , _positionStem.y - 25, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
           crc2d.fillStyle = color;
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
           crc2d.restore();
 
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        }
        crc2d.restore();
    }

    //Flower 3
    export function drawFlower3(_positionStem: Vector): void {
        let nLeaves: number = 5;
        crc2d.beginPath();
        drawFlowerStem(_positionStem);
        crc2d.closePath();
        crc2d.save();
 
        let color: string = colorfulColors[createRandomNum(0, 12)];
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
           let rotate: number = 0;
           switch (drawn) {
            case 0:
                rotate = 0;
                break;
            case 1:
                rotate = 72;
                break;
            case 2:
                rotate = 144;
                break;
            case 3:
                rotate = 216;
                break;
            case 4:
                rotate = 288;
                break;
            default:
                console.log("Something is wrong");
                
            }
           
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2 , _positionStem.y - 25, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
           crc2d.fillStyle = color;
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
           crc2d.restore();
 
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        
        }
        crc2d.restore();
    }

    //Flower 4
    export function drawFlower4(_positionStem: Vector): void {
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);
        crc2d.closePath();
        crc2d.save();
 
        let nLeaves: number = 3;
        let rMax: number = 10;
        let x: number = 0;
        let y: number = 0;
 
        drawFlowerStem(_positionStem);

        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
           
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 2;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY - 20, rMax - drawn * 2  , rMax - drawn * 2 , 0, 0, 2 * Math.PI);
            crc2d.fillStyle = colorfulColors [createRandomNum(0, 12)];
            crc2d.closePath();
            crc2d.fill();
            crc2d.restore();
        }
        crc2d.restore();
    }

    //Flower 5
    export function drawFlower5(_positionStem: Vector): void {
        let nLeaves: number = 7;
        let rMax: number = 7;
        let x: number = 0;
        let y: number = 0;
        let randomColor: number = createRandomNum(0, 360); 
        drawFlowerStem(_positionStem);
        crc2d.save();
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0:
                    x = - 6;
                    y = -20;
                    break;
                case 1:
                    x = 6;
                    y = -20;
                    break;
                case 2:
                    x = -12;
                    y = -30;
                    break;
                case 3:
                    x = 6;
                    y = -42;
                    break;
                case 4:
                    x = 12;
                    y = -30;
                    break;
                case 5:
                    x = -6;
                    y = -42;
                    break;
                case 6:
                    x = 0;
                    y = -31;
                    randomColor = 60;
                    break;
                default:
                    console.log("something is wrong");
                    
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 2;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            crc2d.fill();
            crc2d.restore();
        }
        crc2d.restore();
    }

    //Flower 6 
    export function drawFlower6(_positionStem: Vector): void {
        let nLeaves: number = 13;
        let rMax: number = 7;
        let x: number = 0;
        let y: number = 0;
        let randomColor: number = createRandomNum(0, 360); 
        drawFlowerStem(_positionStem);
        crc2d.save();
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0:
                    x = - 6;
                    y = -22;
                    rMax = 3;
                    break;
                case 1:
                    x = 0;
                    y = -21;
                    rMax = 3;
                    break;
                case 2:
                    x = 6;
                    y = -22;
                    rMax = 3;
                    break;
                case 3:
                    x = -8;
                    y = -25;
                    rMax = 3;
                    break;
                case 4:
                    x = 8;
                    y = -25;
                    rMax = 3;
                    break;
                case 5:
                    x = -10;
                    y = -30;
                    rMax = 3;
                    break;
                case 6:
                    x = 10;
                    y = -30;
                    rMax = 3;
                    break;
                case 7:
                    x = 8;
                    y = -35;
                    rMax = 3;
                    break;
                case 8:
                    x = -8;
                    y = -35;
                    rMax = 3;
                    break;
                case 9:
                    rMax = 3;
                    x = 5;
                    y = -38;
                    break;
                case 10:
                    x = -5;
                    y = -38;
                    rMax = 3;
                    break;
                case 11:
                    x = 0;
                    y = -40;
                    rMax = 3;
                    break;
                case 12:
                    x = 0;
                    y = -30;
                    randomColor = 60;
                    rMax = 7;
                    break;
                default:
                    console.log("something is wrong");
                    
            }
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 2;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            crc2d.fill();
            
            crc2d.restore();
        } 
        crc2d.restore();
    }

    //Cloud
    export function drawCloud(_position: Vector): void {
        let radiusParticle: number = 55;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2d.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
 
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.4)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
 
        crc2d.save();
        crc2d.translate(_position.x, _position.y);
        crc2d.fillStyle = gradient;
 
        for (let i: number = 0; i < 9; i ++) {
        crc2d.save();
        let x: number = 50 + 10 * i;
        let y: number = 2 + i;
        crc2d.translate(x, y);
        crc2d.fill(particle);
        crc2d.restore();
       }
        crc2d.restore();
    }

    //Bee
    export function drawBee(_position: Vector, _direction: Vector): void {

        //body
               crc2d.save();
               crc2d.beginPath();
               crc2d.ellipse(_position.x, _position.y, 20, 10, 0, 0, 2 * Math.PI);
               crc2d.save();
               crc2d.translate(_position.x - 2, _position.y - 5);
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

               crc2d.save();
               if (_direction.x > 0) {
                   crc2d.scale(-1, 1);
               }
               crc2d.restore();
           }
    //Wing
    export function createWing(_direction: number, _x: number): void {
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
    //Random Number
    export function createRandomNum(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    //Backgound
    export function drawBackground(): void {
           let gradient: CanvasGradient = crc2d.createLinearGradient(0, 0, 0, crc2d.canvas.height);
           gradient.addColorStop(0, "HSLA(193, 100%, 40%, 1");
           gradient.addColorStop(0.2, "HSLA(323, 90%, 51%, 1");
           gradient.addColorStop(0.3, "HSLA(55, 100%, 50%, 1");
           gradient.addColorStop(1, "HSLA(126, 100%, 39%, 1");
    
           crc2d.fillStyle = gradient;
           crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    }
    //Sund
    export function drawSun(_position: Vector): void {
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
    //Mountain
    export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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
    //House
    export function drawHouse(_position: Vector, _stepSide: number, _stepUp: number): void {
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
    //FlowerStem
    export function drawFlowerStem(_positionStem: Vector): void {
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, -20);   
    }
    //beehive
    export function drawBeehive(_position: Vector): void {
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(_position.x, _position.y);
        crc2d.lineTo(_position.x + 100, _position.y);
        crc2d.lineTo(_position.x + 100, _position.y - 150);
        crc2d.lineTo(_position.x, _position.y - 150);
        crc2d.closePath();
        crc2d.stroke();
        crc2d.fillStyle = "hsl(28, 91%, 50%)";
        crc2d.fill();
        crc2d.restore();
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(_position.x, _position.y - 100);
        crc2d.lineTo(_position.x + 100, _position.y - 100);
        crc2d.lineTo(_position.x + 100, _position.y - 150);
        crc2d.lineTo(_position.x, _position.y - 150);
        crc2d.closePath();
        crc2d.fillStyle = "hsl(52, 100%, 51%)";
        crc2d.fill();
        crc2d. restore();
        crc2d.save();
        crc2d.beginPath();
        crc2d.moveTo(_position.x + 35, _position.y - 35);
        crc2d.lineTo(_position.x + 65, _position.y - 35);
        crc2d.lineTo(_position.x + 65, _position.y - 65);
        crc2d.lineTo(_position.x + 35, _position.y - 65);
        crc2d.closePath();
        crc2d.lineWidth = 5;
        crc2d.strokeStyle = "hsl(27, 79%, 25%)";
        crc2d.stroke();
        crc2d.restore();


    }
    //Nectar
    export function showNectar(_position: Vector, _degree: number, _color: string, _fps: number): void {
    let x: number = _position.x + 2;
    let y: number = _position.y + 7;
    let degree: number = _degree;
    degree = 0;
    let intervall: number = setInterval (function(): void {
      degree += 1;
      crc2d.save();
      crc2d.beginPath();
      crc2d.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
      crc2d.strokeStyle = "white";
      crc2d.lineWidth = 5;
      crc2d.lineCap = "round";
      crc2d.stroke();
      crc2d.closePath();
      crc2d.restore();
      crc2d.save();
      crc2d.beginPath();
      crc2d.strokeStyle = _color;
      crc2d.lineWidth = 5;
      crc2d.lineCap = "round";
      crc2d.arc(x, y, 10, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degree));
      crc2d.stroke();
      crc2d.closePath();
      crc2d.restore();
      //console.log(intervall);
      if (degree == 361)   
        clearInterval(intervall);
  },                                     _fps);    
}



}
