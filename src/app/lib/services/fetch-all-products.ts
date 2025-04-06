import { createPayload } from "../graphql/create-payload";
import { ApiResponse, Product, SearchData } from "../definitions";
import { print } from "graphql";

// This function is not used the current implementation but is kept for future reference.
// It fetches all products and filters them based on the provided search term.

export const fetchAllProducts = async (
  searchTerm: string = ""
): Promise<SearchData> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const payload = createPayload();
  console.log("searchTerm in fetchAllProducts:", searchTerm);

  const stringifiedPayload = {
    ...payload,
    query: print(payload.query),
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stringifiedPayload),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data - error status: ${response.status}`
      );
    }

    const data: ApiResponse = await response.json();
    console.log("Search data:", data.data.search);

    const searchedProducts = data.data.search.items.filter((product: Product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("searched products:", searchedProducts);
    return { ...data.data.search, items: searchedProducts };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
