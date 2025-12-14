import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import menu from "../slices/menuSlice";
import cart from "../slices/cartSlice";
import errorCart from "../slices/errorCartSlice";
import { RootState } from "@/types/state";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cart", "menu", "errorCart"],
  transforms: [
    encryptTransform({
      secretKey: "mia-chiave34.23-0421234",
    }),
  ],
};

const mainReducers = combineReducers({
  menu,
  cart,
  errorCart,
});

const persistedReducer = persistReducer<RootState>(persistConfig, mainReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
