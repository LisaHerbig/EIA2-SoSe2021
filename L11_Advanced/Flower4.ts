namespace L11_1_Blumenwiese {
    export class Flower4 extends Flower {
        levelMax: number = createRandomNum(10, 80);

        constructor(_position: Vector) {
            super();
        }

        displayNectarLevel(): void {
            //Nectar
        }

        draw(): void {
            //drawFlower1
            drawFlower4(this.position);
        }
    }
}