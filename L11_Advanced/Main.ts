namespace L11_1_Blumenwiese {
    /*
   Aufgabe: L11.1 BlumenwieseAdvanced
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 11.06.2021
   Inspiration: Code und Diagramm aus den Lektionen
   */
   window.addEventListener("load", handleLoad);
   export let crc2d: CanvasRenderingContext2D;
   let imgData: ImageData;

   let moveables: Moveable[] = [];
   let flowers: Flower [] = [];

   for (let h: number = 0; h < createRandomNum(20, 100); h++) {
       let type: number = createRandomNum(0, 5);
       switch (type) {
            case(0):
                let pos1: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower1: Flower1 = new Flower1(pos1);
                flowers.push(flower1);
                break;
            case(1):
                let pos2: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower2: Flower2 = new Flower2(pos2);
                flowers.push(flower2);
                break;
            case(2):
                let pos3: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower3: Flower3 = new Flower3(pos3);
                flowers.push(flower3);
                break;
            case(3):
                let pos4: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower4: Flower4 = new Flower4(pos4);
                flowers.push(flower4);
                break;
            case(4):
                let pos5: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower5: Flower5 = new Flower5(pos5);
                flowers.push(flower5);
                break;
            case(5):
                let pos6: Vector = new Vector(createRandomNum(10, 310), createRandomNum(400, 700));
                let flower6: Flower6 = new Flower6(pos6);
                flowers.push(flower6);
                break;
            default:
                console.log("Something went wrong");
                
       }
   }

   function handleLoad(): void {
    //console.log("Hello");
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

    drawBackground();
    drawSun(new Vector(createRandomNum(20, 1100), createRandomNum(10, 130)));
    drawMountains(new Vector(0, 320), 60, 180, "grey", "White");
    drawMountains(new Vector(0, 320), 20, 120, "black", "lightgrey");
    drawHouse(new Vector(0, 340), 80, -40);

    for (let flower of flowers) {
        flower.draw();
        flower.displayNectarLevel();
    }
    drawBeehive(new Vector(600, 500));
    imgData = crc2d.getImageData(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    window.setInterval(update, 20);
   
   }

    //Coud
   for (let j: number = 0; j < 3; j++) {
    let type: string = "Cloud";
    let pos: Vector = new Vector(5 * j , 15);
    let cloud: Cloud = new Cloud(pos, type);
    moveables.push(cloud);
    }

    //Bee
   for (let k: number = 0; k < 8; k++) {
    let type: string = "Bee";
    let pos: Vector = new Vector (655, 455);
    let bee: Bee = new Bee(pos, type);
    moveables.push(bee);
    }

   function update(): void {
       crc2d.clearRect(0, 0, 360, 720);
       crc2d.putImageData(imgData, 0, 0);

       for (let moveable of moveables) {
                moveable.move(1 / 50); 
                moveable.draw(); 
       }
   }
  
}