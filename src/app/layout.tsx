import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/Providers";

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Products dashboard using DummyJSON API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
