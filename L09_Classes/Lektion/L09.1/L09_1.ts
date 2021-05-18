namespace L09_1_Lektion {
    class Vector {
        x: number = 0;
        y: number = 0;

        set(_x: number, _y: number): void {
            this.x += _x;
            this.y += _y;
        }
    
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
    
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

       
    }
    
    let v1: Vector = new Vector();
    v1.set(2, 2);
    v1.scale(2);
    console.log(v1);    
}