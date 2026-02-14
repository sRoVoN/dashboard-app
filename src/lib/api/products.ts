import { GamesResponse } from "../../types/products";

export const fetchGames = async (page: number = 1, pageSize: number = 8): Promise<GamesResponse> => {
  const res = await fetch(`/api/games?page=${page}&page_size=${pageSize}`);
  
  if (!res.ok) {
    throw new Error(`Error fetching games: ${res.status}`);
  }

  const data: GamesResponse = await res.json();
  return data;
};
