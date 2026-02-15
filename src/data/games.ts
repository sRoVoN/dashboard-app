import { GameDetail } from "../types/products";


export const games: GameDetail[] = [
  {
    id: 3498,
    name: "Grand Theft Auto V",
    released: "2013-09-17",
    background_image: "https://picsum.photos/id/100/600/400",
    rating: 4.48,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 4" } },
      { platform: { id: 3, name: "Xbox One" } },
    ],
  },
  {
    id: 4200,
    name: "Portal 2",
    released: "2011-04-18",
    background_image: "https://picsum.photos/id/101/600/400",
    rating: 4.62,
    genres: [
      { id: 3, name: "Puzzle" },
      { id: 4, name: "Platformer" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 3" } },
      { platform: { id: 3, name: "Xbox 360" } },
    ],
  },
  {
    id: 3328,
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    background_image: "https://picsum.photos/id/102/600/400",
    rating: 4.67,
    genres: [
      { id: 1, name: "Action" },
      { id: 5, name: "RPG" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 4" } },
      { platform: { id: 3, name: "Xbox One" } },
      { platform: { id: 4, name: "Nintendo Switch" } },
    ],
  },
  {
    id: 5286,
    name: "Tomb Raider (2013)",
    released: "2013-03-05",
    background_image: "https://picsum.photos/id/103/600/400",
    rating: 4.05,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 3" } },
      { platform: { id: 3, name: "Xbox 360" } },
    ],
  },
  {
    id: 5679,
    name: "The Elder Scrolls V: Skyrim",
    released: "2011-11-11",
    background_image: "https://picsum.photos/id/104/600/400",
    rating: 4.42,
    genres: [
      { id: 1, name: "Action" },
      { id: 5, name: "RPG" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 4" } },
      { platform: { id: 3, name: "Xbox One" } },
    ],
  },
  {
    id: 13536,
    name: "Hollow Knight",
    released: "2017-02-24",
    background_image: "https://picsum.photos/id/105/600/400",
    rating: 4.37,
    genres: [
      { id: 3, name: "Platformer" },
      { id: 6, name: "Indie" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 4, name: "Nintendo Switch" } },
    ],
  },
  // دو بازی جدید اضافه
  {
    id: 15000,
    name: "Cyberpunk 2077",
    released: "2020-12-10",
    background_image: "https://picsum.photos/id/106/600/400",
    rating: 3.85,
    genres: [
      { id: 1, name: "Action" },
      { id: 5, name: "RPG" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 2, name: "PlayStation 4" } },
      { platform: { id: 3, name: "Xbox One" } },
    ],
  },
  {
    id: 15001,
    name: "Among Us",
    released: "2018-06-15",
    background_image: "https://picsum.photos/id/107/600/400",
    rating: 4.10,
    genres: [
      { id: 6, name: "Indie" },
      { id: 3, name: "Party" },
    ],
    platforms: [
      { platform: { id: 1, name: "PC" } },
      { platform: { id: 5, name: "Mobile" } },
    ],
  },
]
