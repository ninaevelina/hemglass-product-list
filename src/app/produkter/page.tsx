import { Metadata } from "next";
import ProductsSkeleton from "../ui/products-skeleton/products-skeleton";
import { Suspense } from "react";
import ProductListing from "../ui/product-listing/product-listing";

export const metadata: Metadata = {
  title: "Produkter | Hemglass",
};

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductListing />
      </Suspense>
    </main>
  );
}
