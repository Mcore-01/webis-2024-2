import { Pizza } from "./pizza";

export class Pepperoni extends Pizza{
    constructor(size:string){
        if (size == "Большая"){
            super("Пепперони", 1000, 600, size, "./assets/pizza-images/pepperoni.png")
        }
        else if (size == "Маленькая"){
            super("Пепперони", 900, 500, size, "./assets/pizza-images/pepperoni.png")
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}