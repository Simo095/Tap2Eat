import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  setErrorDishNotRightStock,
  setListDishNotInStock,
} from "./errorCartSlice";
import { CartState, MenuItem } from "@/types/state";

const initialState: CartState = {
  orderedFood: [],
  qnt: 0,
  total: 0.0,
  notify: false,
  note: "",
  objIdDishQnt: null,
  covered: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<number>) => {
      state.orderedFood.push(action.payload);
    },
    addQntCart: (state) => {
      state.qnt += 1;
    },
    setOrderedFood: (state, action: PayloadAction<number[]>) => {
      state.orderedFood = action.payload;
    },
    minusQnt: (state) => {
      if (state.qnt > 0) {
        state.qnt -= 1;
      }
    },
    plusTotal: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    minusTotal: (state, action: PayloadAction<number>) => {
      state.total -= action.payload;
    },
    setNotify: (state, action: PayloadAction<boolean>) => {
      state.notify = action.payload;
    },
    addNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    setObjToDB: (state, action: PayloadAction<any>) => {
      state.objIdDishQnt = action.payload;
    },
    setCovered: (state, action: PayloadAction<number>) => {
      state.covered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(modifyObjToDB.fulfilled, (state, action) => {
      state.objIdDishQnt = action.payload;
    });
  },
});

export const {
  addDish,
  addQntCart,
  setOrderedFood,
  minusQnt,
  plusTotal,
  minusTotal,
  setNotify,
  addNote,
  setObjToDB,
  setCovered,
} = cartSlice.actions;

export const modifyObjToDB = createAsyncThunk(
  "cart/modifyObjToDB",
  async ({ orderFoodApp, note }: { orderFoodApp: number[]; note: string }) => {
    try {
      const repetedDish: any = {};
      if (repetedDish.hasOwnProperty("richiestastock")) {
        Object.assign(repetedDish, { FS_QR: 1 });
        Object.assign(repetedDish, { note: note });

        for (const idDish of orderFoodApp) {
          if (repetedDish[idDish]) {
            repetedDish[idDish]++;
          } else {
            repetedDish[idDish] = 1;
          }
        }
        return repetedDish;
      } else {
        Object.assign(repetedDish, { note: note });
        Object.assign(repetedDish, { richiestastock: true });
        Object.assign(repetedDish, { FS_QR: 1 });
        for (const idDish of orderFoodApp) {
          if (repetedDish[idDish]) {
            repetedDish[idDish]++;
          } else {
            repetedDish[idDish] = 1;
          }
        }
        return repetedDish;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const checkObjToDBAndMenu = createAsyncThunk(
  "cart/checkObjToDBAndMenu",
  async (
    {
      objToDB,
      notRightQuantity,
      handleShowModalCart,
    }: {
      objToDB: any;
      notRightQuantity: number[];
      handleShowModalCart: () => void;
    },
    { dispatch }
  ) => {
    try {
      const ListBlobMenu = await fetch(
        `https://gastronomia-contadina.vercel.app/api/get`,
        {
          method: "GET",
        }
      );

      if (ListBlobMenu.ok) {
        const menuJson = await ListBlobMenu.json();
        const lastMenuInsert = menuJson.reduce((latest: any, current: any) => {
          return new Date(current.uploadedAt) > new Date(latest.uploadedAt)
            ? current
            : latest;
        }, menuJson[0]);
        const response = await fetch(lastMenuInsert.url);
        const objMenuResponse: MenuItem[] = await response.json();
        const sortedDishes = [...objMenuResponse].sort(
          (a, b) => a.ward.id - b.ward.id
        );
        sortedDishes.forEach((dish) => {
          if (objToDB.hasOwnProperty(dish.id)) {
            if (objToDB[dish.id] > dish.stock) {
              dispatch(setErrorDishNotRightStock(true));
              dispatch(setListDishNotInStock([...notRightQuantity, dish.id]));
            } else {
              const updatedStock = dish.stock - objToDB[dish.id];
              if (updatedStock < 0) {
                dispatch(setErrorDishNotRightStock(true));
                dispatch(setListDishNotInStock([...notRightQuantity, dish.id]));
              } else {
                dish.stock = updatedStock;
              }
            }
          }
        });
      } else {
        const errorMessage = await ListBlobMenu.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
    handleShowModalCart();
  }
);

export default cartSlice.reducer;
