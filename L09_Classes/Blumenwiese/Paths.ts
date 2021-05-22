namespace L09_2_Blumenwiese {

    //Flower 1
    export function drawFlower1(_position: Vector, _size: number): void {
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
                  crc2d.scale(_size, _size);
                  crc2d.fill();
                  crc2d.restore();
              }
              crc2d.restore();
               
                
            }
    
    //Flower 2
    export function drawFlower2(_positionStem: Vector, _size: number): void {
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
           crc2d.ellipse(_positionStem.x + 2 , _positionStem.y - 25, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
           crc2d.fillStyle = color;
           crc2d.scale(_size, _size);
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
           crc2d.restore();
 
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.scale(_size, _size);
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        
        }
        
    }

    //Flower 3
    export function drawFlower3(_positionStem: Vector, _size: number): void {
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
           crc2d.scale(_size, _size);
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 25);
           crc2d.restore();
 
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 25, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.scale(_size, _size);
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        
        }
        
    }

    //Flower 4
    export function drawFlower4(_positionStem: Vector, _size: number): void {
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
            crc2d.scale(_size, _size);
            crc2d.fill();
            crc2d.restore();
        }
    }

    //Flower 5
    export function drawFlower5(_positionStem: Vector, _size: number): void {
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
    }

    //Flower 6 
    export function drawFlower6(_positionStem: Vector, _size: number): void {
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
            crc2d.save();
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 2;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            crc2d.scale(_size, _size);
            crc2d.fill();
            
            crc2d.restore();
        } 
    }
        
      


}