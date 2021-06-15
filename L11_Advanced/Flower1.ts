namespace L11_1_Blumenwiese {
   export class Flower1 extends Flower {
        levelMax: number = createRandomNum(10, 80);

        /*constructor(_position: Vector, _type: number) {
            super();
        }*/
        constructor(_position: Vector) {
            super();
        }

        displayNectarLevel(): void {
            //Nectar
            console.log(this.levelMax);
            
        }

        draw(): void {
            //drawFlower1
            drawFlower1(this.position);
        }
    }
}