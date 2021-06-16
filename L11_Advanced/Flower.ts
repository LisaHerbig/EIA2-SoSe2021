namespace L11_1_Blumenwiese {
    export abstract class Flower {
        static degree: number;
        protected position: Vector;
        //type: number;
        

        constructor() {
            let numX: number = createRandomNum(20, 1100);
            let numY: number = createRandomNum(340, 700);
            this.position = new Vector(numX, numY);
        }

        abstract draw(): void;

        abstract displayNectarLevel(): void;


    }
}