import { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/utils/AOSInit";
import Footer from "@/sections/footer/Footer";
import Nav from "@/sections/nav/Nav";

export const metadata: Metadata = {
  title: "Fábio | Portfolio",
  description: "Personal portfolio of Fábio.",
  icons: {
    icon: [
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "Fábio-Portfolio",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
