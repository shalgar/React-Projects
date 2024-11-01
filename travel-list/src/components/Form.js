import { useState } from "react"; 

export default function Form({onAddItem}) {
    const [itemDesc, setItemDesc] = useState("")
    const [itemQuantity, setItemQuantity] = useState(1)
  
    function handleSubmit(e){
      e.preventDefault();
      if(!itemDesc) return;
  
      const newItem = {itemDesc,itemQuantity,packed:false, id:Date.now()};
      onAddItem(newItem);
      setItemDesc('');
      setItemQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need 😍 for the trip?</h3>
        <select value={itemQuantity} onChange={(e)=>setItemQuantity(Number(e.target.value))}>
          {Array.from({length:20}, (_,i) =>i+1).map(
            (num)=>
              <option value={num} key={num}>{num}</option>
          )}
        </select>
        <input 
          type="text" 
          placeholder="items..." 
          value={itemDesc} 
          onChange={(e) =>setItemDesc(e.target.value)}
        />
        <button>Add</button>
      </form>
    )
}