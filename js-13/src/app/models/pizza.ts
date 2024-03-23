import { Topping } from "./topping";

export interface IPizza{
    src: string,
    title: string
}

export class Pizza{
    stuff : string;
    price : number;
    calories : number;
    size : string;
    toppings: Topping[];
    src: string;
    constructor(stuff:string, price:number, calories:number, size:string, src:string){
        this.stuff = stuff;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.src = src;
        this.toppings = []
    }

    addTopping(topping : Topping){
        this.toppings.push(topping);
    }

    removeTopping(topping : Topping){
        const index = this.toppings.findIndex(e => e == topping);
        this.toppings.splice(index, 1);
    }

    getToppings(){
        return this.toppings.map(element =>
            element.name
        );
    }

    getSize(){
        return this.size;
    }

    getStuffing(){
        return this.stuff;
    }

    calculatePrice(){
        let result = this.price;
        this.toppings.forEach(element =>{
            if (this.size == "Большая"){
                result += element.bigPrice;
            }
            else{
                result += element.smallPrice;
            }
        }) 
        return result;   
    }

    calculateCalories(){
        let result = this.calories;
        this.toppings.forEach(element =>{
            if (this.size == "Большая"){
                result += element.bigCalories;
            }
            else{
                result += element.smallCalories;
            }
        }) 
        return result;   
    }
}