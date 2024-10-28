function Pizza({pizza}){
   return (
      <div className={`pizza ${pizza.soldOut ? 'sold-out' :''}`}>
        <img src={pizza.photoName} alt={pizza.name}/>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut?'SOLD OUT':pizza.price}</span>
      </div>
   )
}

export default Pizza;