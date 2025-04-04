import Image from "next/image";
import "./products.scss";
import { fetchAllProducts } from "@/app/lib/services/fetch-all-products";

export default async function Products({ searchTerm }: { searchTerm: string }) {
  const data = await fetchAllProducts(searchTerm);
  const products = data.items;
  console.log("searchTerm in products-component:", searchTerm);

  return (
    <section>
      <ul className="productlist">
        {products.map((product) => (
          <li className="list-item" key={product.productId}>
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
                <button className="button-primary">
                  Lägg till i varukorgen
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
