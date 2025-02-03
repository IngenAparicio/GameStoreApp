import { Link } from "react-router-dom";

export const GameCard = ({
    id,
    name, 
    category, 
    price,
    rating,
    description,
}) => {

    const gameImageUrl = `/games/${id}.jpeg`;

  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={gameImageUrl} className="card-img" alt={name} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{category}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{rating} <i class="bi bi-star"></i></p>
                        <p className="card-text">{description}</p>
                        <Link to={`/detail/${id}`}>
                            Details...
                        </Link>
                    </div>
                </div>

            </div>
        </div>      
    </div>
  )
}
