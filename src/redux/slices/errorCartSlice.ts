import { ErrorCartState } from "@/types/state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ErrorCartState = {
  errorDishNotRightStock: false,
  listDishNotInStock: [],
};

const errorCartSlice = createSlice({
  name: "errorCart",
  initialState,
  reducers: {
    setErrorDishNotRightStock: (state, action: PayloadAction<boolean>) => {
      state.errorDishNotRightStock = action.payload;
    },
    setListDishNotInStock: (state, action: PayloadAction<number[]>) => {
      state.listDishNotInStock = action.payload;
    },
  },
});

export const { setErrorDishNotRightStock, setListDishNotInStock } =
  errorCartSlice.actions;
export default errorCartSlice.reducer;
