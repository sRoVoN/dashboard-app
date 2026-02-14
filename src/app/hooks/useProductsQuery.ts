import { useQuery } from "@tanstack/react-query";
import { ProductsResponse } from "../../types/products";
import { fetchProducts } from "../lib/api/products";

export const useProductQuery = (
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<ProductsResponse, Error>({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
    placeholderData: (previousData) => previousData, 
  });
};
