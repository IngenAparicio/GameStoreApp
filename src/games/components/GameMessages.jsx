
export const GameMessages = ({gameMessage}) => {
  
  return (
    <div className="row rows-cols-1 rows-col-md-3 g-3">
      {
        gameMessage.map( mes => (
          <input type="textarea" className="form-control mt-3" readOnly key={mes.id} value={mes.text}/>
        ))
      }
    </div>
  )
}
