export interface GameSummary {
  id: number
  name: string
  released: string
  background_image: string
  rating: number
}

export interface GameDetail extends GameSummary {
  genres: {
    id: number
    name: string
  }[]
  platforms: {
    platform: {
      id: number
      name: string
    }
  }[]
}

export interface GamesResponse {
  count: number
  next: string | null
  previous: string | null
  results: GameSummary[]
}

