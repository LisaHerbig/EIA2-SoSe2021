namespace L11_1_Blumenwiese {
    export class Flower3 extends Flower {
        levelMax: number = createRandomNum(10, 80);

        constructor(_position: Vector) {
            super();
        }

        displayNectarLevel(): void {
            //Nectar
            console.log(this.levelMax);
            
        }

        draw(): void {
            //drawFlower1
            drawFlower3(this.position);
        }
    }
}