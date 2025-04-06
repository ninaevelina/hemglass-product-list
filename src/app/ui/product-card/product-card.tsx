import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import "./product-card.scss";
import Button from "../shared/button/button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log("Added to cart:", product.productName);
  };
  return (
    <li className="list-item">
      <article className="product-card">
        <div
          className="product-card__image-container"
          style={{
            backgroundImage: product.backgroundImgCard?.source
              ? `url(${product.backgroundImgCard.source})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* TODO: Add fallback image */}
          <Image
            src={product.productImg.source}
            alt={product.productName}
            loading="lazy"
            sizes="(min-width: 768px) 25vw, 50vw"
            style={{
              objectFit: "contain",
              maxHeight: "100%",
              padding: "40px 0px",
            }}
            fill
          />
        </div>
        <div className="product-card__details">
          <Link href={`/produkter/${product.slug}`}>{product.productName}</Link>
          <p>{product.customProductVariantMappings.packageSize} st</p>
          <p>{product.priceWithTax.max / 100} kr</p>
        </div>
        <div className="product-card__button-container">
          <Button
            label="Lägg till i varukorgen"
            onClick={handleAddToCart}
            className="button-primary"
          />
        </div>
      </article>
    </li>
  );
}
