import { MenuItem, MenuState, WardItem } from "@/types/state";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: MenuState = {
  menu: [
    {
      id: 1,
      name: "TAGLIATELLE RAGU",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 9999,
      price: 8,
    },
    {
      id: 17,
      name: "TORTELLONI BURRO SALVIA",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 19,
      name: "TORTELLINI BRODO",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 20,
      name: "TORTELLINI PANNA",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 364,
      name: "TORTELLONI CONTADINI",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 197,
      name: "PENNE ALL ORTOLANA",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 6,
    },
    {
      id: 67,
      name: "PASTA ALLA NORMA",
      ward: { id: 1, name: "PRIMI PIATTI" },
      stock: 99999,
      price: 7,
    },
    {
      id: 251,
      name: "SALSICCIA IN UMIDO",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 9,
    },
    {
      id: 35,
      name: "CONIGLIO LATTE GRANA",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 39,
      name: "GUANCIALINI MAIALE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 9,
    },
    {
      id: 266,
      name: "POLPETTE CONTADINE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 8,
    },
    {
      id: 216,
      name: "SPEZZATINO",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 10,
    },
    {
      id: 234,
      name: "FAGOTTINO DI FARAONA",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 12,
    },
    {
      id: 245,
      name: "CACCIATORA DI POLLO",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 10,
    },
    {
      id: 248,
      name: "VITELLO TONNE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 10,
    },
    {
      id: 205,
      name: "POLPETTE AL SUGO",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 9,
    },
    {
      id: 419,
      name: "POLPETTINE DI VERDURE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 7,
    },
    {
      id: 94,
      name: "GNOCCO E TIGELLE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 15,
    },
    {
      id: 311,
      name: "ROAST BEEF",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 10,
    },
    {
      id: 319,
      name: "FRITTELLE QUINOA",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 7,
    },
    {
      id: 603,
      name: "POLPETTONE",
      ward: { id: 2, name: "SECONDI PIATTI" },
      stock: 99999,
      price: 8,
    },
    {
      id: 45,
      name: "PATATE ARROSTO",
      ward: { id: 3, name: "CONTORNI" },
      stock: 99999,
      price: 4,
    },
    {
      id: 46,
      name: "PURE PATATE",
      ward: { id: 3, name: "CONTORNI" },
      stock: 99999,
      price: 4,
    },
    {
      id: 51,
      name: "VERDURE GRIGLIATE",
      ward: { id: 3, name: "CONTORNI" },
      stock: 99999,
      price: 4,
    },
    {
      id: 243,
      name: "VERDURE MISTE COTTE",
      ward: { id: 3, name: "CONTORNI" },
      stock: 99999,
      price: 4,
    },
    {
      id: 280,
      name: "SPRITZ",
      ward: { id: 5, name: "APERITIVI" },
      stock: 99999,
      price: 5,
    },
    {
      id: 231,
      name: "TAGLIERE APERITIVO MEDIO",
      ward: { id: 5, name: "APERITIVI" },
      stock: 99999,
      price: 10,
    },
    {
      id: 230,
      name: "TAGLIERE APERITIVO MINI",
      ward: { id: 5, name: "APERITIVI" },
      stock: 99999,
      price: 5,
    },
    {
      id: 232,
      name: "TAGLIERE APERITIVO MAXI",
      ward: { id: 5, name: "APERITIVI" },
      stock: 99999,
      price: 15,
    },
    {
      id: 206,
      name: "PRODOTTI",
      ward: { id: 5, name: "APERITIVI" },
      stock: 99999,
      price: 0,
    },
    {
      id: 202,
      name: "ACQUA O,750",
      ward: { id: 7, name: "BEVANDE FRIGO" },
      stock: 99999,
      price: 2.5,
    },
    {
      id: 342,
      name: "ACQUA 0,5L",
      ward: { id: 7, name: "BEVANDE FRIGO" },
      stock: 99999,
      price: 1,
    },
    {
      id: 89,
      name: "CALICE VINO",
      ward: { id: 7, name: "BEVANDE FRIGO" },
      stock: 99999,
      price: 4.5,
    },
    {
      id: 68,
      name: "CAFFE",
      ward: { id: 8, name: "CAFFETTERIA" },
      stock: 99999,
      price: 1.5,
    },
    {
      id: 281,
      name: "LIQUORE",
      ward: { id: 8, name: "CAFFETTERIA" },
      stock: 99999,
      price: 4,
    },
    {
      id: 201,
      name: "TORTA A PEZZI",
      ward: { id: 10, name: "DOLCI" },
      stock: 99999,
      price: 3.5,
    },
  ],
  ward: [],
  notFound: false,
  status: "idle",
  error: null,
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await fetch(
    `https://gastronomia-contadina.vercel.app/api/get`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }
  const data = await response.json();
  const menuFiltered = data
    .filter((file: any) => file.pathname.startsWith(`gc`))
    .reduce((latest: any, current: any) => {
      return new Date(current.uploadedAt) > new Date(latest.uploadedAt)
        ? current
        : latest;
    });
  if (!menuFiltered) throw new Error("File not found");
  const menuResponse = await fetch(menuFiltered.url);
  const menuData: MenuItem[] = await menuResponse.json();
  return menuData.sort((a, b) => a.ward.id - b.ward.id);
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.menu = action.payload;
    },
    addWard: (state, action: PayloadAction<WardItem[]>) => {
      state.ward = action.payload;
    },
    setNotFound: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
    },
    updateMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.menu = action.payload;
      state.notFound = action.payload.length === 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menu = action.payload;
        const newUniqueElements: { [key: string]: MenuItem } = {};
        action.payload.forEach((item) => {
          if (!newUniqueElements[item.ward.id]) {
            newUniqueElements[item.ward.id] = item;
          }
        });
        state.ward = Object.values(newUniqueElements).map((item) => item.ward);
        state.notFound = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch menu.";
        state.notFound = true;
      });
  },
});

export const { addMenu, addWard, setNotFound, updateMenu } = menuSlice.actions;
export default menuSlice.reducer;
