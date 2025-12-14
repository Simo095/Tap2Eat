import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProviderRedux } from "./ProviderRedux";
import { Analytics } from "@vercel/analytics/next";

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
        <Analytics />
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
