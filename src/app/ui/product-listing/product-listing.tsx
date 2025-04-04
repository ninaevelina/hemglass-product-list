"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/lib/definitions";
import { fetchProducts } from "@/app/lib/services/fetch-products";
import ProductCard from "../product-card/product-card";
import "./product-listing.scss";
import Search from "../search/search";
import { useDebounce } from "@/app/lib/hooks/use-debounce";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <section>
      <Search
        placeholder="Sök"
        onSearch={(searchTerm) => setSearchQuery(searchTerm)}
      />
      {filteredProducts.length === 0 && searchQuery.length > 0 ? (
        <div>
          <h2>Hoppsan!</h2>
          <p>Inga matchande sökresultat för &quot;{searchQuery}&quot;</p>
        </div>
      ) : (
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
