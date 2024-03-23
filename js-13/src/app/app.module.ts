import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ToppingComponent } from './components/topping/topping.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    CalculatorComponent,
    ToppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
