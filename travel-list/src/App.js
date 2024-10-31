import { useState } from "react"; 
 
function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item){
    setItems((items) => [...items,item])
  }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItem ={handleAddItems}/>
      <PackingList items = {items}/>
      <Stats/>
    </div>
  )
}

function Logo() {
  return (
    <h1 className="logo">🌴Far Away!🎒</h1>
  )
}

function Form({onAddItem}) {
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

function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map(item => <Item key={item.id} item = {item}/>)}
      </ul>
    </div>
  )
}

function Item({item}){
  console.log(item);
  return (
    <li style={item.packed ? {textDecoration:'line-through'}:{}}>
      <span>{item.itemQuantity} {item.itemDesc}</span>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
       <em>You Have Packed X items (X%)</em>
    </footer>
  )
}
export default App;
