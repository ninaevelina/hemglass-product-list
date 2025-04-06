"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/lib/definitions";
import { fetchProducts } from "@/app/lib/services/fetch-products";
import ProductCard from "../product-card/product-card";
import "./product-listing.scss";
import Search from "../search/search";
import { useDebounce } from "@/app/lib/hooks/use-debounce";
import Filter from "../filter/filter";

export default function ProductListing() {
  const [productLists, setProductLists] = useState<{
    products: Product[];
    filteredProducts: Product[];
  }>({
    products: [],
    filteredProducts: [],
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts();
        setProductLists({
          products: products.items,
          filteredProducts: products.items,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const searchedProducts = productLists.filteredProducts.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase())
  );

  // TODO: Implement pagination

  return (
    <section>
      <div className="grid-1col-2col">
        <Search
          placeholder="Sök"
          onSearch={(searchTerm) => setSearchQuery(searchTerm)}
        />
        <Filter
          products={productLists.products}
          onCategoryChange={(filteredProducts) =>
            setProductLists((prev) => ({ ...prev, filteredProducts }))
          }
        />
      </div>
      {/* TODO: Add styling for the loading component */}
      {isLoading && <div>Hämtar produkter...</div>}
      {/*TODO: Add styles for the "no results"-container down below */}
      {searchedProducts.length === 0 && searchQuery.length > 0 ? (
        <div>
          <h2>Hoppsan!</h2>
          <p>Inga matchande sökresultat för &quot;{searchQuery}&quot;</p>
        </div>
      ) : (
        <ul className="product-list">
          {searchedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
