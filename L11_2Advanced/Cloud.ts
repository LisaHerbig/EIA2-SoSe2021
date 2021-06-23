namespace L11_2_Blumenwiese {
    export class Cloud extends Moveable {

        constructor(_position: Vector, _type: string) {
            super(_position, _type);
            this.position = _position;
        }

        public draw(): void {
            drawCloud(this.position); 
        }
    }

}