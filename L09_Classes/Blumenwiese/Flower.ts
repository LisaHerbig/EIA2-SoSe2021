namespace L09_2_Blumenwiese {
    export class Flower {
        position: Vector;
        type: number;
        size: number;

        constructor() {
            this.position.x = createRandomNum(0, 360);
            this.position.y = createRandomNum(320, 700);

            this.type = createRandomNum(0, 5);

            this.size = createRandomNum(0.5, 2);
        }

        draw(): void {
          if (this.type == 0) {
              drawFlower1(this.position, this.size);
            }
          if (this.type == 1) {
              drawFlower2(this.position, this.size);
          }
          if (this.type == 2) {
              drawFlower3(this.position, this.size);
          }
          if (this.type == 3) {
              drawFlower4(this.position, this.size);
          }
          if (this.type == 4) {
              drawFlower5(this.position, this.size);
          }
          if (this.type == 5) {
              drawFlower6(this.position, this.size);
          }
          
        }

    }
}