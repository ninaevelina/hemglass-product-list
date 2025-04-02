import gql from "graphql-tag";

export const searchQuery = gql`
  query search($input: SearchInput!) {
    search(input: $input) {
      totalItems
      items {
        sku
        productId
        productVariantId
        productName
        slug
        description
        score
        inStock
        productAsset {
          id
          preview
        }
        currencyCode
        price {
          ... on PriceRange {
            min
            max
          }
        }
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
        }
        facetIds
        facetValueIds
        collectionIds
        backgroundImgCard {
          id
          preview
          width
          height
          source
          name
        }
        backgroundAnimationCard {
          id
          preview
          width
          height
          source
          name
        }
        productImg {
          id
          preview
          width
          height
          source
          name
        }
        customProductVariantMappings {
          packageSize
        }
        popularity
        badges {
          id
          position
          assetId
          asset {
            id
            name
            preview
            source
          }
          collection {
            id
            name
          }
        }
      }
      collections {
        collection {
          id
          name
          slug
          parentId
        }
        count
      }
      facetValues {
        facetValue {
          id
          name
          facet {
            id
            name
            code
          }
        }
        count
      }
      prices {
        range {
          min
          max
        }
        rangeWithTax {
          min
          max
        }
      }
    }
  }
`;
