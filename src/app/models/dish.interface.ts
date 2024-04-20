import { DishCategory } from "./dish-category.emum";

export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: DishCategory;
  popular: boolean;
}
