import { Component, OnInit } from '@angular/core';
import { pizzas } from './data/pizzas';
import { Pizza } from './models/pizza';
import { Bavarian } from './models/bavarian-pizza';
import { Margherita } from './models/margherita-pizza';
import { Pepperoni } from './models/pepperoni-pizza';
import { PizzaSizeService } from './services/PizzaSize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'js-13';
  data = pizzas;
  selectedPizza : Pizza;
  isPizzaSelected = false;
  pizzaSize:string = "Маленькая";

  constructor(private readonly pizzaSizeService : PizzaSizeService){}

  ngOnInit(){
    this.pizzaSizeService.isBigPizza$.subscribe((size) => this.setPizzaSize(size));
  }
  setPizzaSize(isBig:boolean){
    if(isBig)
      this.pizzaSize="Большая";
    else
      this.pizzaSize="Маленькая";
    this.changePizza(this.selectedPizza);
  }

  changePizza(pizza:Pizza){
    this.isPizzaSelected = true; 
    if(pizza.stuff == "Пепперони"){
      this.selectedPizza = new Pepperoni(this.pizzaSize);
    }
    else if(pizza.stuff == "Маргарита"){
      this.selectedPizza = new Margherita(this.pizzaSize);
    }
    else {
      this.selectedPizza = new Bavarian(this.pizzaSize);
    }
  }
}
