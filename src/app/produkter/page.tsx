import { Metadata } from "next";
import Products from "../ui/products/products";

export const metadata: Metadata = {
  title: "Produkter | Hemglass",
};

export default async function Page() {
  return (
    <main>
      <Products />
    </main>
  );
}
