// app/api/games/route.ts
import { NextResponse } from "next/server";
import { GamesResponse } from "../../../types/products";
import { games } from "../../../data/games";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = Math.max(1, Number(searchParams.get("page_size")) || 8);
  const API_KEY = process.env.RAWG_API_KEY;

  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`,
    );

    if (!res.ok) {
      throw new Error(`RAWG API Error: ${res.status}`);
    }

    const data: GamesResponse = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Using fallback fake data...");
    const totalPages = Math.ceil(games.length / pageSize);

    if (page > totalPages) {
      return NextResponse.json({
        count: games.length,
        next: null,
        previous:
          page > 1 ? `/api/games?page=${page - 1}&page_size=${pageSize}` : null,
        results: [],
      });
    }
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pagedGames = games.slice(start, end);
    const nextPage =
      end < games.length
        ? `/api/games?page=${page + 1}&page_size=${pageSize}`
        : null;

    return NextResponse.json({
      count: games.length,
      next:
        page < totalPages
          ? `/api/games?page=${page + 1}&page_size=${pageSize}`
          : null,
      previous:
        page > 1 ? `/api/games?page=${page - 1}&page_size=${pageSize}` : null,
      results: pagedGames,
    });
  }
}
