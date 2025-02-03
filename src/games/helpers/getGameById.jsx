import { games } from "../data/games"

export const getGameById = (id) => {
  return games.find(x => x.id == id);
}
