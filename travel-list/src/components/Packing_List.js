import { useState } from "react"; 
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem,onClearItems}) {
    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems;
  
    if(sortBy === 'input') sortedItems = items;
  
    if(sortBy === 'desc') sortedItems = items.slice().sort((a,b)=>a.itemDesc.localeCompare(b.itemDesc))
    else sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map(
            item =>
             <Item 
                key={item.id} 
                onDeleteItem = {onDeleteItem} 
                onToggleItem = {onToggleItem}
                item = {item}
              />
            )
          }
        </ul>
        <div className="actions">
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
          <option value='input'>Sort By Input</option>
          <option value='desc'>Sort By Description</option>
          <option value='packed'>Sort By Packed Item</option>
        </select>
          {items.length > 0 && <button onClick={onClearItems}>Clear</button>}
        </div>
      </div>
    )
}  