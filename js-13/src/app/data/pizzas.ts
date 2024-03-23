import { Pizza } from "../models/pizza";
import { Pepperoni } from "../models/pepperoni-pizza";
import { Margherita } from "../models/margherita-pizza";
import { Bavarian } from "../models/bavarian-pizza";
const size = "Маленькая";
export const pizzas: Pizza[] = [
    new Pepperoni(size),
    new Margherita(size),
    new Bavarian(size)
];