import { DishCategory } from "./dish-category.enum";

export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: DishCategory;
  popular: boolean;
}
