import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getGameById, getMessageByGameId } from '../helpers'
import { useMemo } from "react";
import { GameMessages } from "../components/GameMessages";

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = useMemo( () => getGameById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!game) {
    return <Navigate to="/action" />
  }

  return (
    <>
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/games/${id}.jpeg`} alt={game.name} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{game.name}</h3>
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item"><b> Category:</b> {game.category}</li>
          <li className="list-group-item"><b> Price:</b> {game.price}</li>
          <li className="list-group-item"><b> Rating:</b> {game.rating} <i class="bi bi-star"></i></li>
        </ul>
        <h5 className="mt-3">{game.description}</h5>
        <button className="btn btn-primary m-3">
          Buy
        </button>
        <button className="btn btn-primary m-3"
          onClick={onNavigateBack}>
          close
        </button>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12">
        <textarea name="" id="" placeholder="Leave a Message.." className="form-control"></textarea>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-12 d-flex justify-content-end">
        <button className="btn btn-primary m-3">Send</button>
      </div>
    </div>
    <div className="row mt-5">
      <h3>Messages:</h3>
    </div>
    <div className="row mt5">
      {        
          <GameMessages  gameId={game.id}/>        
      }
    </div>
    </>
  )
}
