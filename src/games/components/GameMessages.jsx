import { useMemo } from "react";
import { getMessageByGameId } from "../helpers/getMessageByGameId";


export const GameMessages = ({gameId}) => {
  const messages = useMemo( () => getMessageByGameId(gameId), [gameId]);
  return (
    <div className="row rows-cols-1 rows-col-md-3 g-3">
      {
        messages.map( mes => (
          <textarea className="form-control mt-3" readOnly key={mes.id}>{mes.text}</textarea>
        ))
      }
    </div>
  )
}
