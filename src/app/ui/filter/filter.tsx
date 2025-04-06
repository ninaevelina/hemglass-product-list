import { Product } from "@/app/lib/definitions";
import { useState } from "react";
import "./filter.scss";

interface FilterProps {
  products: Product[];
  onCategoryChange: (filteredProducts: Product[]) => void;
}

export default function Filter({ products, onCategoryChange }: FilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    // TODO: Use enum for switch cases
    const filteredProducts = (() => {
      switch (category) {
        case "pinnar":
          return products.filter((product) =>
            product.facetValueIds.map(String).includes("4")
          );
        case "laktosfria":
          return products.filter((product) =>
            product.facetValueIds.map(String).includes("65")
          );
        case "strutar":
          return products.filter((product) =>
            product.facetValueIds.map(String).includes("3")
          );
        case "veganska":
          return products.filter((product) =>
            product.facetValueIds.map(String).includes("74")
          );
        case "clickAndCollect":
          return products.filter((product) =>
            product.facetValueIds.map(String).includes("165")
          );
        default:
          return products;
      }
    })();
    onCategoryChange(filteredProducts);
  };

  //TODO: Refactor - map buttons and add aria-labels
  return (
    <div className="filter-buttons-container">
      <button
        onClick={() => handleCategoryChange("")}
        className={
          activeCategory === ""
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Alla glassar
      </button>
      <button
        onClick={() => handleCategoryChange("pinnar")}
        className={
          activeCategory === "pinnar"
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Pinnar
      </button>
      <button
        onClick={() => handleCategoryChange("laktosfria")}
        className={
          activeCategory === "laktosfria"
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Laktosfria
      </button>
      <button
        onClick={() => handleCategoryChange("strutar")}
        className={
          activeCategory === "strutar"
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Strutar
      </button>
      <button
        onClick={() => handleCategoryChange("veganska")}
        className={
          activeCategory === "veganska"
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Veganska
      </button>
      <button
        onClick={() => handleCategoryChange("clickAndCollect")}
        className={
          activeCategory === "clickAndCollect"
            ? "filter-buttons-container__filter-button-active"
            : "filter-buttons-container__filter-button-inactive"
        }
      >
        Click and Collect
      </button>
    </div>
  );
}
