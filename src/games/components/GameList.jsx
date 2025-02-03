import { useMemo } from "react";
import { getGamesByCategory } from "../helpers/getGamesByCategory";
import { GameCard } from "./";

export const GameList = ({category}) => {

    const games =  useMemo( () => getGamesByCategory(category), [category]);

  return (
    <div className="row rows-cols-1 rows-col-md-3 g-3">
      {
        games.map(game => (
            <GameCard 
                key={ game.id } 
                { ...game }
            />
        ))
      }
    </div>
  )
}
