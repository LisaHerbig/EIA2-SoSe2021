namespace Endaufgabe_FußballSiumulation {
    export class Vector {
        public x: number;
        public y: number;
    
        public constructor(_x: number = 0, _y: number = 0) {
          this.set(_x, _y);
        }
    
        public static getDifference(_v0: Vector, _v1: Vector): Vector {
          return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }

        
        public static getNormalisedVector(_normalise: Vector, _length: number): Vector | undefined  {
          let magnitude: number = Math.sqrt(_normalise.x * _normalise.x + _normalise.y * _normalise.y);
          if (magnitude > 0) {
            
          let normalised: Vector = new Vector (_normalise.x / magnitude, _normalise.y / magnitude);
          let scaledNormalised: Vector = new Vector (normalised.x * 20, normalised.y * 20);
          return scaledNormalised;
          }
          return undefined;
        }

        public get length(): number {
          return Math.hypot(this.x, this.y);
        }
    
        public set(_x: number, _y: number): void {
          this.x = _x;
          this.y = _y;
        }
    
        public scale(_factor: number): void {
          this.x *= _factor;
          this.y *= _factor;
        }
    
        public add(_addend: Vector): void {
          this.x += _addend.x;
          this.y += _addend.y;
        }


    }
}
