"use client";

import { Product } from "@/app/lib/definitions";
import { fetchAllProducts } from "@/app/lib/services/fetch-all-products";
import { useEffect, useState } from "react";
import ProductCard from "../product-card/product-card";
import "./products.scss";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const products = await fetchAllProducts();
        setProducts(products.items);
        setIsLoading(false);
        console.log("Products:", products.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul className="productlist">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
