import { Dish } from "./dish.interface";

export interface UiDishItem extends Dish {
  orderedAmount?: number;
}
