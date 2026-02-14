// app/api/games/route.ts
import { NextResponse } from "next/server";
import { GamesResponse } from "../../../types/products";


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const pageSize = searchParams.get("page_size") || "8";
    const API_KEY = process.env.RAWG_API_KEY;

    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`
    );

    if (!res.ok) {
      throw new Error(`RAWG API Error: ${res.status}`);
    }

    const data: GamesResponse = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch games" },
      { status: 500 }
    );
  }
}
