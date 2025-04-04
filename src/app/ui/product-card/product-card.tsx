import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import "./product-card.scss";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
          }}
        >
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
          <p>{product.productName}</p>
          <p>{product.customProductVariantMappings.packageSize} st</p>
          <p>{product.priceWithTax.max} kr</p>
        </div>
        <div className="product-card__button-container">
          <button className="button-primary">Lägg till i varukorgen</button>
        </div>
      </article>
    </li>
  );
}
