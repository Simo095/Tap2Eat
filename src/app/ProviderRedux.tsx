"use client";

import { persistor, store } from "@/redux/stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function ProviderRedux({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor as any}>
        {children}
      </PersistGate>
    </Provider>
  );
}
