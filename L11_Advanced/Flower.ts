namespace L11_1_Blumenwiese {
    export class Flower {
        position: Vector;
        type: number;
        

        constructor() {
            let numX: number = createRandomNum(20, 1100);
            let numY: number = createRandomNum(340, 700);
            this.position = new Vector(numX, numY);
            this.type = createRandomNum(0, 5);
            
        }

        draw(): void {
          /*if (this.type == 0) {
              drawFlower1(this.position);
            }
          if (this.type == 1) {
              drawFlower2(this.position);
          }
          if (this.type == 2) {
              drawFlower3(this.position);
          }
          if (this.type == 3) {
              drawFlower4(this.position);
          }
          if (this.type == 4) {
              drawFlower5(this.position);
          }
          if (this.type == 5) {
              drawFlower6(this.position);
          }*/
          
        }

    }
}