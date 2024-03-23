import { Pizza } from "./pizza";

export class Bavarian extends Pizza{
    constructor(size:string){
        if (size == "Большая"){
            super("Баварская", 900, 650, size, "./assets/pizza-images/bavarskaya.png")
        }
        else if (size == "Маленькая"){
            super("Баварская", 800, 550, size, "./assets/pizza-images/bavarskaya.png")
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}