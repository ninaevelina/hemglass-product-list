import { createPayload } from "../graphql/create-payload";
import { ApiResponse, SearchData } from "../definitions";
import { print } from "graphql";

export const fetchProducts = async (): Promise<SearchData> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const payload = createPayload();

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
    return data.data.search;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// TODO: update params to include take and skip to enable pagination
