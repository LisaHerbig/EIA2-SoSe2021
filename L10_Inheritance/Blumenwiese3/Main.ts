namespace L10_2_Blumenwiese {
    /*
   Aufgabe: L10.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 11.06.2021
   Inspiration: Code und Diagramm aus den Lektionen
   */

   window.addEventListener("load", handleLoad);
   export let crc2d: CanvasRenderingContext2D;
   let imgData: ImageData;

   let moveables: Moveable[] = [];
  
   console.log("Moveable" + moveables.length);

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

   for (let j: number = 0; j < 3; j++) {
    let type: string = "Cloud";
    let pos: Vector = new Vector(5 * j , 15);
    let cloud: Cloud = new Cloud(pos, type);
    moveables.push(cloud);
    console.log("MoveableInCloud" + moveables.length);
}

   for (let k: number = 0; k < 8; k++) {
    let type: string = "Bee";
    let pos: Vector = new Vector (655, 455);
    let bee: Bee = new Bee(pos, type);
    moveables.push(bee);
    console.log("MoveableInBee " + moveables.length);
}

   function update(): void {
       crc2d.clearRect(0, 0, 360, 720);
       crc2d.putImageData(imgData, 0, 0);

       //for (let m: number = 0; m < moveables.length; m++) {
           //moveables[m].move(1 / 50);
           //moveables[m].draw();
       //}
       for (let moveable of moveables) {
           if (moveable instanceof Cloud) {
                moveable.move(1 / 50); }
           if (moveable instanceof Bee) {
                moveable.move(1 / createRandomNum(25, 125)); }
           moveable.draw(); 
       }
       //for (let k: number = 0; k < 8; k++) {
       //bees[k].move(1 / createRandomNum(25, 125));
       //bees[k].draw();
      //}
   }
   console.log("Hi?");
   
   
}