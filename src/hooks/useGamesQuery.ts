import { fetchGames } from '../lib/api/products';
import { useQuery } from "@tanstack/react-query";
import { GamesResponse } from "../types/products";

export const useGamesQuery = (
  page: number = 1,
  pageSize: number = 10,
  selectedGenres: string[] = [],
  selectedPlatforms: string[] = []
) => {
  return useQuery<GamesResponse, Error>({
    queryKey: ["products", page, pageSize, selectedGenres, selectedPlatforms],
    queryFn: () => fetchGames(page, pageSize, selectedGenres, selectedPlatforms),
    staleTime: 0,
  });
};

