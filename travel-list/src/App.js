import { useState } from "react"; 
 
 const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

function Logo() {
  return (
    <h1 className="logo">🌴Far Away!🎒</h1>
  )
}

function Form() {
  const [itemDesc, setItemDesc] = useState("")
  const [itemQuantity, setItemQuantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault();
    if(!itemDesc) return;
    
    const newItem = {itemDesc,itemQuantity,packed:false, id:Date.now()};

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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => <Item item = {item}/>)}
      </ul>
    </div>
  )
}

function Item({item}){
  return (
    <li style={item.packed ? {textDecoration:'line-through'}:{}}>
      <span>{item.quantity} {item.description}</span>
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
