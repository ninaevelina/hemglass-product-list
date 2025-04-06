import { Metadata } from "next";
import ProductListing from "../ui/product-listing/product-listing";

export const metadata: Metadata = {
  title: "Produkter | Hemglass",
};

export default async function Page() {
  return (
    <main>
      <ProductListing />
    </main>
  );
}
