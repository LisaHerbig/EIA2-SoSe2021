namespace L10_2_Blumenwiese {
    /*
   Aufgabe: L10.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 29.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09 Asteroids für die Animation
   */

   window.addEventListener("load", handleLoad);
   export let crc2d: CanvasRenderingContext2D;
   let imgData: ImageData;

  
   //console.log("Moveable" + moveables.length);
   function handleLoad(): void {
    console.log("Hello");
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2d = <CanvasRenderingContext2D>canvas.getContext("2d"); 

    drawBackground();
    drawSun(new Vector(createRandomNum(20, 1100), createRandomNum(10, 130)));
    drawMountains(new Vector(0, 320), 60, 180, "grey", "White");
    drawMountains(new Vector(0, 320), 20, 120, "black", "lightgrey");
    drawHouse(new Vector(0, 340), 80, -40);
    for (let i: number = 0; i < createRandomNum(50, 100); i ++) {
    let flower: Flower = new Flower();
    flower.draw();
    }
    drawBeehive(new Vector(600, 500));

    imgData = crc2d.getImageData(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    //crc2d.save();
    
    window.setInterval(update, 20);
}

   let moveables: Moveable[] = [];

   for (let j: number = 0; j < 3; j++) {
        let pos: Vector = new Vector(5 * j , 15);
        let cloud: Cloud = new Cloud(pos);
        moveables.push(cloud);
        console.log("MoveableInCloud" + moveables.length);
   }

   for (let k: number = 0; k < 8; k++) {
       let pos: Vector = new Vector (655, 455);
       let bee: Bee = new Bee(pos);
       moveables.push(bee);
       console.log("MoveableInBee " + moveables.length);
   }

   function update(): void {
       crc2d.clearRect(0, 0, 360, 720);
       crc2d.putImageData(imgData, 0, 0);

       for (let moveable of moveables) {
       moveable.move(1 / 50);
       moveable.draw(); 
       }
       //for (let k: number = 0; k < 8; k++) {
       //bees[k].move(1 / createRandomNum(25, 125));
       //bees[k].draw();
      //}
   }
   console.log("Hi?");
   
   
}