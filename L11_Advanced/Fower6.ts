namespace L11_1_Blumenwiese {
   export  class Flower6 extends Flower {
        levelMax: number = createRandomNum(10, 80);

        constructor(_position: Vector) {
            super();
        }

        displayNectarLevel(): void {
            //Nectar
        }

        draw(): void {
            //drawFlower1
            drawFlower2(this.position);
        }
    }
}