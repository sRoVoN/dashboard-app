import { fetchGames } from '../lib/api/products';
import { useQuery } from "@tanstack/react-query";
import { GamesResponse } from "../types/products";


export const useGamesQuery = (
  page: number = 1,
  pageSize: number = 10
) => {
  return useQuery<GamesResponse, Error>({
    queryKey: ["products", page, pageSize],
    queryFn: () => fetchGames(page, pageSize),
    placeholderData: (previousData) => previousData, 
  });
};
