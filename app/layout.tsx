import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Oluwatobi Olanipekun - Crafting Digital Experiences That Matter",
  description: "Oluwatobi Olanipekun - Crafting Digital Experiences That Matter",
  icons: {
    icon: "/favicon.ico", // You can also use png like "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body>{children}</body>
    </html>
  );
}
