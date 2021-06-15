namespace L11_1_Blumenwiese {
    export class Flower5 extends Flower {
        levelMax: number = createRandomNum(10, 80);

        constructor(_position: Vector, _type: number) {
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