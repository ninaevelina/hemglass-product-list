import { Metadata } from "next";
import Products from "../ui/products/products";
import Search from "../ui/search/search";
import ProductsSkeleton from "../ui/products-skeleton/products-skeleton";
import { Suspense } from "react";
import { fetchAllProducts } from "../lib/services/fetch-all-products";

export const metadata: Metadata = {
  title: "Produkter | Hemglass",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { searchTerm?: string };
}) {
  const searchTerm = searchParams?.searchTerm || "";
  const data = await fetchAllProducts(searchTerm);
  const products = data.items;
  console.log("products in page", products);

  return (
    <main>
      <Search placeholder="Sök" />
      <Suspense fallback={<ProductsSkeleton />}>
        <Products searchTerm={searchTerm} />
      </Suspense>
    </main>
  );
}
