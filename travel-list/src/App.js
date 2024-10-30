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
  return (
    <div className="add-form">
    </div>
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
