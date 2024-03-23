
class Topping{
    constructor(name, smallPrice, smallCalories, bigPrice, bigCalories){
        this.name = name;
        this.smallPrice = smallPrice;
        this.smallCalories = smallCalories;
        this.bigPrice = bigPrice;
        this.bigCalories = bigCalories;
    }
}

class Pizza {
    constructor(stuff, price, calories, size){
        this.stuff = stuff;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.toppings = []
    }

    addTopping(topping){
        if(topping instanceof Topping){
            this.toppings.push(topping);
            return;
        }
        console.log("Это не добавка!")
    }

    removeTopping(topping){
        //плохая идея, остается пустой элемент
        // const index = this.toppings.findIndex(e => e == topping);
        // delete this.toppings[index];

        //плохая идея №2, удаляются все добавки одного вида(мб можно использовать 2х добавки, не написано)
        //this.toppings = this.toppings.filter(element => element !== topping)
        
        //система боль, но работает
        // const index = this.toppings.findIndex(e => e == topping);
        // if(index == -1){
        //     return;
        // }

        // let array = new Array();

        // for(let i = 0; i < this.toppings.length; i++){
        //     if(i != index){
        //         array.push(this.toppings[i]);
        //     }   
        // }

        // this.toppings = array;
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

class Margherita extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Маргарита", 700, 500, size)
        }
        else if (size == "Маленькая"){
            super("Маргарита", 600, 400, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

class Pepperoni extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Пепперони", 1000, 600, size)
        }
        else if (size == "Маленькая"){
            super("Пепперони", 900, 500, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

class Bavarian extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Баварская", 900, 650, size)
        }
        else if (size == "Маленькая"){
            super("Баварская", 800, 550, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

const Size = {
    Big:"Большая",
    Small:"Маленькая"
}
let margPizza = new Margherita(Size.Big);
let bavarianPizza = new Bavarian(Size.Small);

let array = [margPizza, bavarianPizza]
let toppingCheeseBoard = new Topping("Сырный борт", 50, 20, 100, 40);
let toppingCreamyMozzarella = new Topping("Сливочная моцарелла", 50, 20, 100, 50);
let toppingCheddarParmesan = new Topping("Чедер и пармезан", 150, 50, 300, 100);
const pizzaTest = new Pizza("Не число", "Не число" , "Не число", "Не число","Не число")
margPizza.addTopping(toppingCheddarParmesan);
margPizza.addTopping(toppingCheeseBoard);
margPizza.addTopping("Не добавка");
margPizza.removeTopping(toppingCheddarParmesan);
const container = document.getElementById("container");



let rez = "";
for (const element of array){
    rez = `${rez}<div>Пицца: ${element.getStuffing()} Цена: ${element.calculatePrice()} Добавки: ${element.getToppings()}</div>` 
}
container.innerHTML = `<div>${rez}</div>`