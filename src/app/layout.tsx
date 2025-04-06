import type { Metadata } from "next";
import "../styles/_globals.scss";
import Header from "./ui/shared/header/header";
import Footer from "./ui/shared/footer/footer";

export const metadata: Metadata = {
  title: "Hemglass",
  description:
    "Vi ska levererar glass och glädje till hela Sverige. Med över 400 anställda och cirka 300 glassbilar säljer vi glass på ungefär 150 000 platser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
