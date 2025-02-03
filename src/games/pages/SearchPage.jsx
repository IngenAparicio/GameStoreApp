import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { GameCard } from "../components/GameCard";
import { getGamesByName } from "../helpers";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const gamesresult = getGamesByName(q);


  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a game"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-1" onClick={onSearchSubmit}>
            Search
          </button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q == '')
            ? <div className="alert alert-primary">Search a game</div>
            : (gamesresult.length == 0) && <div className="alert alert-danger">No results for {q}</div>
          }

          
          

          {
            gamesresult.map(game => (
              <GameCard key={game.id} {...game}/>
            ))
          }
          
        </div>
      </div>

    </>
  )
}