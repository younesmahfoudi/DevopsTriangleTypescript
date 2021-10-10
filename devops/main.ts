
export class Triangle {
    constructor(private coteA: number, private coteB: number, private coteC: number){
        this.coteA = coteA || 0;
        this.coteB = coteB || 0;
        this.coteC = coteC || 0;
    };

    private sameCote(): number {
        let n = 0;
        this.coteA == this.coteB ? n++ : n;
        this.coteA == this.coteC ? n++ : n;
        this.coteB == this.coteC ? n++ : n;
        return n;
    }

    public isIsosceles(): Boolean {return (this.sameCote() == 1)}

    public isEquilateral() : Boolean {return (this.sameCote() == 3)}

    public isRectangle() : Boolean {
        let a = this.coteA ^ 2;
        let b = this.coteB ^ 2;
        let c = this.coteC ^ 2;
        return (a + b == c || a + c == b || b + c == a)
    }

    public isCoherent() : Boolean{return (this.coteC > 0 && this.coteB > 0 && this.coteA > 0)}
}


//const triangle = new Triangle(1,5,5);

//console.log("Isoscele : ", triangle.isIsosceles());
//console.log("Rectangle : ", triangle.isRectangle());
//console.log("Coherent : ", triangle.isCoherent());
//console.log("Equilateral : ", triangle.isEquilateral());
