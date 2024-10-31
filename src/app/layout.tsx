import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "React Next Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
