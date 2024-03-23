export class Topping{
    name : string;
    smallPrice : number;
    smallCalories : number;
    bigPrice : number;
    bigCalories : number;
    src : string;
    constructor(name:string, smallPrice:number, smallCalories:number, bigPrice:number, bigCalories:number, src:string){
        this.name = name;
        this.smallPrice = smallPrice;
        this.smallCalories = smallCalories;
        this.bigPrice = bigPrice;
        this.bigCalories = bigCalories;
        this.src = src;
    }
}