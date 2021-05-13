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
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
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
}