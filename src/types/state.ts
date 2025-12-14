import { store } from "@/redux/stores/store";

export interface RootState {
  menu: MenuState;
  cart: CartState;
  errorCart: ErrorCartState;
}

export interface CartState {
  orderedFood: number[];
  qnt: number;
  total: number;
  notify: boolean;
  note: string;
  objIdDishQnt: any;
  covered: number;
}

export interface ErrorCartState {
  errorDishNotRightStock: boolean;
  listDishNotInStock: number[];
}

export interface MenuItem {
  id: number;
  name: string;
  ward: WardItem;
  price: number;
  stock: number;
}

export interface WardItem {
  id: number;
  name: string;
}

export interface Dish {
  id: number;
  name: string;
  price: number;
}

export interface MenuState {
  menu: MenuItem[];
  ward: WardItem[];
  notFound: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export type AppDispatch = typeof store.dispatch;
