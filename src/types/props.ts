import { MenuItem } from "./state";

export interface DishProps {
  dish: MenuItem;
}

export interface ModalCartProps {
  showProp: boolean;
  handleCloseProp: () => void;
  handleShowModalCartProp: () => void;
  repetedDishStateProp: { [key: string]: number };
  deleteOrderedFoodProp: (id: string) => void;
  handleOrderProp: () => void;
  costoCopertiProp: number;
  notRightQuantityProp: number[];
  errorDishInStockProp: boolean;
}

export type ModalQRProps = {
  showProp: boolean;
  repetedDishStateProp: Record<string, number> | null;
  handleShowModalCartProp: () => void;
  handleCloseModalQrProp: () => void;
};

export interface ModalCancelProps {
  showCancel: boolean;
  handleCloseCancel: () => void;
  handleShowCancel: () => void;
  handleShowModalCart: () => void;
}
