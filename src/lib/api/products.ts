import { games } from "../../data/games";
import { GamesResponse } from "../../types/products";

export const fetchGames = async (
  page: number,
  pageSize: number,
  genres: string[] = [],
  platforms: string[] = [],
): Promise<GamesResponse> => {
  const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

  const genreParam = genres.length ? `&genres=${genres.join(",")}` : "";
  const platformParam = platforms.length
    ? `&platforms=${platforms.join(",")}`
    : "";

  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}${genreParam}${platformParam}`,
    );
    if (!res.ok) throw new Error("Failed to fetch games");
    return res.json();
  } catch (err) {
    console.log("Fallback to fake data");

    let filteredGames = games;
    if (genres.length) {
      filteredGames = filteredGames.filter((g) =>
        g.genres.some((gen) => genres.includes(gen.name)),
      );
    }
    if (platforms.length) {
      filteredGames = filteredGames.filter((g) =>
        g.platforms.some((p) => platforms.includes(p.platform.name)),
      );
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
      count: filteredGames.length,
      next:
        end < filteredGames.length
          ? `/api/games?page=${page + 1}&page_size=${pageSize}`
          : null,
      previous:
        page > 1 ? `/api/games?page=${page - 1}&page_size=${pageSize}` : null,
      results: filteredGames.slice(start, end),
    };
  }
};
