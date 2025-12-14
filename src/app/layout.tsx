import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProviderRedux } from "./ProviderRedux";

export const metadata: Metadata = {
  title: "Tap2Eat",
  description: "Order by your-self",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
