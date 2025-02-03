import { GameList } from "../components/GameList"

export const SimPage = () => {
  return (
    <>
      <h1>
        Simulator games
      </h1>
      <hr />
      <GameList category='Simulator' />
    </>
  )
}
