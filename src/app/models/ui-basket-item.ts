import { BasketItem } from "./basket-item";

export interface UiBasketItem extends BasketItem {
  price: number;
  name: string;
}
