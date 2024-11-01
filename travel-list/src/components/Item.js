export default function Item({item,onDeleteItem,onToggleItem}){
    return (
      <li style={item.packed ? {textDecoration:'line-through'}:{}}>
        <input type="checkbox" onChange={() =>onToggleItem(item.id)}></input>
        <span>{item.itemQuantity} {item.itemDesc}</span>
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
      </li>
    )
  }