export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}
