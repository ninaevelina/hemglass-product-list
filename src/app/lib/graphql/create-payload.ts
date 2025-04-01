import { Payload } from "../definitions";
import { searchQuery } from "./search-query";

export const createPayload = (): Payload => {
  const input = {
    term: "",
    collectionId: "2",
    facetValueIds: [],
    facetValueFilters: [],
    groupByProduct: true,
    sort: { popularity: "DESC" },
    take: 24,
    skip: 0,
  };
  return {
    query: searchQuery,
    variables: {
      input,
    },
    operationName: "search",
  };
};
