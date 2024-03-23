import { Input, Component} from '@angular/core';
import { Topping } from '../../models/topping';
import { toppings } from '../../data/toppings';
import { Pizza } from '../../models/pizza';
import { PizzaSizeService } from '../../services/PizzaSize.service';

@Component({
    selector: 'app-calculator',
    templateUrl: `./calculator.component.html`,
    styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
    @Input() pizza : Pizza;

    toppings : Topping[] = toppings;

    isBigPizzaSelected = false;

    constructor(private readonly pizzaSizeService : PizzaSizeService){}
    
    addTopping(topping:Topping){
        this.pizza.addTopping(topping);
    }

    changePizzaSize() {
        this.isBigPizzaSelected = !this.isBigPizzaSelected;
        console.log(this.isBigPizzaSelected);
        this.pizzaSizeService.changeSize(this.isBigPizzaSelected);
    }
 }
