namespace L09_2_Blumenwiese {
export class Vector {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
        //console.log("construct");  
        this.set(_x, _y);
    }

    set(_x: number, _y: number): void {
        //console.log("set");
        this.x = _x;
        this.y = _y;
        
    }

    scale(_factor: number): void {
        //console.log("Scale");
        this.x *= _factor;
        this.y *= _factor;
        
    }

    add(_addEnd: Vector): void {
        //console.log("add");
        this.x += _addEnd.x;
        this.y += _addEnd.y;
        
    }

    random(_minLength: number, _maxLength: number): void {
        //console.log("random");
        let length: number = _minLength + Math.random() * (_maxLength - _minLength);
        let direction: number = Math.random() * 2 * Math.PI;

        this.set(Math.cos(direction), Math.sin(direction));
        this.scale(length);

        
    }
}

}