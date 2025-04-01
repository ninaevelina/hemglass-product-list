import { DocumentNode } from "graphql";

export type Product = {
  sku: string;
  productId: string;
  productVariantId: string;
  productName: string;
  slug: string;
  description: string;
  score: number;
  inStock: boolean;
  productAsset: ProductAsset;
  currencyCode: string;
  price: Price;
  priceWithTax: PriceWithTax;
  facetIds: string[];
  facetValueIds: string[];
  collectionIds: string[];
  backgroundImgCard: BackgroundImageCard;
  backgroundAnimationCard: null;
  productImg: ProductImage;
  customProductVariantMappings: CustomProductVariantMappings;
  popularity: number;
  badges: Badge[];
};

export type ProductAsset = {
  id: string;
  preview: string;
};

export type Price = {
  min: number;
  max: number;
};

export type PriceWithTax = {
  min: number;
  max: number;
};

export type BackgroundImageCard = {
  id: string;
  preview: string;
  width: number;
  height: number;
  source: string;
  name: string;
};

export type ProductImage = {
  id: string;
  preview: string;
  width: number;
  height: number;
  source: string;
  name: string;
};

export type CustomProductVariantMappings = {
  packageSize: number;
};

export type Badge = {
  id: string;
  position: string;
  assetId: string;
  asset: {
    id: string;
    name: string;
    preview: string;
    source: string;
  };
  collection: {
    id: string;
    name: string;
  };
};

export type Collection = {
  collection: {
    id: string;
    name: string;
    slug: string;
    parentId: string;
  };
  count: number;
};

export type FacetValue = {
  facetValue: {
    id: string;
    name: string;
    facet: {
      id: string;
      name: string;
      code: string;
    };
  };
  count: number;
};

export type Prices = {
  range: {
    min: number;
    max: number;
  };
  rangeWithTax: {
    min: number;
    max: number;
  };
};

export type SearchData = {
  totalItems: number;
  items: Product[];
  collections: Collection[];
  facetValues: FacetValue[];
  prices: Prices;
};

export type ApiResponse = {
  data: {
    search: SearchData;
  };
};

export type SearchInput = {
  term: string;
  collectionId: string;
  facetValueIds: string[];
  facetValueFilters: string[];
  groupByProduct: boolean;
  sort: {
    popularity: string;
  };
  take: number;
  skip: number;
};

export type Variables = {
  input: SearchInput;
};

export type Payload = {
  query: DocumentNode;
  variables: Variables;
  operationName: string;
};
