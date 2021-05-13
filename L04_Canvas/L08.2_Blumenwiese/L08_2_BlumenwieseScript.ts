namespace L08_2_Blumenwiese {
     /*
    Aufgabe: L08.2 Blumenwiese
    Name: Lisa Herbig
    Matrikel: 266236
    Datum: 13.05.2021
    Inspiration: Code und Diagramm aus der Lektion
    */

    window.addEventListener("load", handleLoad);
    let crc2d: CanvasRenderingContext2D;
    interface Vector {
        x: number;
        y: number;
    }    

    let pinkPurple: string [] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)"];
    let colorfulColors: string[] = ["HSLA(296, 100%, 50%, 0.8)", "HSLA(296, 100%, 50%, 0.8)", "HSLA(273, 100%, 50%, 0.8)", "HSLA(283, 100%, 50%, 0.8)", "HSLA(0, 100%, 50%, 0.8)", "HSLA(19, 100%, 50%, 0.8)", "HSLA(32, 100%, 50%, 0.9)", "HSLA(60, 100%, 50%, 0.7)", "HSLA(165, 100%, 50%, 0.8)", "HSLA(203, 100%, 50%, 0.8)", "HSLA(244, 100%, 50%, 0.8)", "HSLA((356, 100%, 50%, 0.8))"];
    console.log(colorfulColors.length);
    
    function handleLoad(): void {
        console.log("Hello");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

        drawBackground();
        drawSun({x: 100, y: 120});
        drawCloud({x: 290, y: 60}, {x: 100, y: 60}, 30);
        drawCloud({x: 200, y: 140}, {x: 80, y: 30}, 17);
        drawMountains({x: 0, y: 320}, 60, 180, "grey", "White");
        drawMountains({x: 0, y: 320}, 20, 120, "black", "lightgrey");
        drawHouse({x: 0, y: 340}, 80, -40);
        drawFlower1({x: 20, y: 360});
        drawFlower2({x: 80, y: 360});
        drawFlower3({x: 120, y: 360});
        drawFlower4({x: 160, y: 360});
        drawFlower5({x: 200, y: 360});
    }

    function createRandomNum(_min: number, _max: number): number {
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

    function drawFlower1(_positionStem: Vector): void {
        let nLeaves: number = 7;
        let rMax: number = 7;
        let x: number = 0;
        let y: number = 0;

        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0 /*|| 2 || 4*/:
                    x = - 5;
                    y = 0;
                    break;
                case 1:
                    x = 5;
                    y = 0;
                    break;
                case 2:
                    x = -4;
                    y = -10;
                    break;
                case 3 /*|| 3 || 5*/:
                    x = 4;
                    y = -10;
                    break;
                case 4:
                    x = -3;
                    y = -17;
                    break;
                case 5:
                    x = 3;
                    y = -17;
                    break;
                case 6:
                    x = 0;
                    y = -25;
                    break;
                default:
                    console.log("something is wrong");
                    
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 1;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax - drawn * 0.5 , rMax - drawn * 0.5, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = pinkPurple [createRandomNum(0, 3)];
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            
            crc2d.restore();
        }
        
    }

    function drawFlower2(_positionStem: Vector): void {
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();
        
        let color: string = colorfulColors[createRandomNum(0, 12)];
        
        for (let drawn: number = 0; drawn < 5; drawn++) {
           //crc2d.save();
           let rotate: number = 0;
           switch (drawn) {
            case 0:
                //crc2d.rotate(0 * Math.PI / 180);
                rotate = 0;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                break;
            case 1:
                //crc2d.rotate(72 * Math.PI / 180);
                rotate = 72;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 2:
                //crc2d.rotate(144 * Math.PI / 180);
                rotate = 144;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 3: 
                //crc2d.rotate(216 * Math.PI / 180);
                rotate = 216;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 4:
                //crc2d.rotate(288 * Math.PI / 180);
                rotate = 288;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            default:
                console.log("Something is wrong");
                
            }
           //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2 , _positionStem.y - 5, 2, 20, rotate * Math.PI / 180, 0, 2 * Math.PI);
           crc2d.fillStyle = color;
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
           crc2d.restore();

           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        
        }
        
    }

    function drawFlower3(_positionStem: Vector): void {
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();

        let color: string = colorfulColors[createRandomNum(0, 12)];
        
        for (let drawn: number = 0; drawn < 5; drawn++) {
           //crc2d.save();
           let rotate: number = 0;
           switch (drawn) {
            case 0:
                //crc2d.rotate(0 * Math.PI / 180);
                rotate = 0;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                break;
            case 1:
                //crc2d.rotate(72 * Math.PI / 180);
                rotate = 72;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 2:
                //crc2d.rotate(144 * Math.PI / 180);
                rotate = 144;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 3: 
                //crc2d.rotate(216 * Math.PI / 180);
                rotate = 216;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            case 4:
                //crc2d.rotate(288 * Math.PI / 180);
                rotate = 288;
                //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
                
                break;
            default:
                console.log("Something is wrong");
                
            }
           //crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2 , _positionStem.y - 5, 5, 15, rotate * Math.PI / 180, 0, 2 * Math.PI);
           crc2d.fillStyle = color;
           crc2d.fill();
           crc2d.closePath();
           crc2d.translate(_positionStem.x + 2, _positionStem.y - 5);
           crc2d.restore();

           crc2d.beginPath();
           crc2d.ellipse(_positionStem.x + 2, _positionStem.y - 5, 5, 5, 0, 0, 2 * Math.PI);
           crc2d.fillStyle = "HSLA(58, 100%, 50%, 1)";
           crc2d.fill();
           crc2d.closePath();
           crc2d.save();
        
        }
    }

    function drawFlower4(_positionStem: Vector): void {
        crc2d.beginPath();
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.closePath();
        crc2d.save();

        let nLeaves: number = 3;
        let rMax: number = 10;
        let x: number = 0;
        let y: number = 0;

        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
           
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 1;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax - drawn * 2  , rMax - drawn * 2 , 0, 0, 2 * Math.PI);
            crc2d.fillStyle = colorfulColors [createRandomNum(0, 12)];
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            
            crc2d.restore();
        }
        
    }

    function drawFlower5(_positionStem: Vector): void {
        let nLeaves: number = 7;
        let rMax: number = 7;
        let x: number = 0;
        let y: number = 0;
        let randomColor: number = createRandomNum(0, 360); 
        crc2d.fillStyle = "HSLA(112, 100%, 20%, 1)";
        crc2d.fillRect(_positionStem.x, _positionStem.y, 5, 20);
        crc2d.save();
        
        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            crc2d.save();
            switch (drawn) {
                case 0 /*|| 2 || 4*/:
                    x = - 6;
                    y = 0;
                    break;
                case 1:
                    x = 6;
                    y = 0;
                    break;
                case 2:
                    x = -12;
                    y = -10;
                    break;
                case 3 /*|| 3 || 5*/:
                    x = 6;
                    y = -22;
                    break;
                case 4:
                    x = 12;
                    y = -10;
                    break;
                case 5:
                    x = -6;
                    y = -22;
                    break;
                case 6:
                    x = 0;
                    y = -10;
                    randomColor = 60;
                    break;
                default:
                    console.log("something is wrong");
                    
            }
            crc2d.save();
            crc2d.translate(x, y);
            let posX: number = _positionStem.x + 1;
            let posY: number = _positionStem.y - 1;
            crc2d.beginPath();
            crc2d.ellipse(posX, posY, rMax, rMax, 0, 0, 2 * Math.PI);
            crc2d.fillStyle = "HSLA(" + randomColor + ", 100%, 50%, 0.8";
            crc2d.closePath();
            //crc2d.closePath();
            //crc2d.save();
            crc2d.fill();
            
            
            crc2d.restore();
        }
    }
        

}