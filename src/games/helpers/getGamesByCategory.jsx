import { games } from '../data/games';

export const getGamesByCategory = (category) => {
    const validCategories = ['Action','Rol','Simulator'];
    if(!validCategories.includes(category)){
        throw new Error(`${category} not available at the moment, sorry for the inconvenience.`);        
    }
    return games.filter(x => x.category == category);
}