import { games } from "../data/games";

export const getGamesByName = (name = '') => {
    name.toLowerCase().trim();
    if (name.length == 0) return [];
    
    return games.filter( x => x.name.toLowerCase().trim().includes(name));
}

