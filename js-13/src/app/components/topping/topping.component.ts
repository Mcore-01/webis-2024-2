import { Input, Component } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
    selector: 'app-topping',
    templateUrl: './topping.component.html',
    styleUrl: './topping.component.scss',

})
export class ToppingComponent {
    @Input() topping : Topping;
    @Input() size : boolean;
    isBigPizza = false;
}
