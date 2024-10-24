function Pizza(props){
   const pizza = props.pizzaObj;
   console.log(pizza.photoName);
   return (
      <div className="pizza">
        <img src={pizza.photoName} alt={pizza.name}/>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
   )
}

export default Pizza;