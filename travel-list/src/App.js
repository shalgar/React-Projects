import { useState } from "react"; 
import Logo from './components/Logo';
import PackingList from './components/Packing_List';
import Stats from './components/Stats';
import Form from './components/Form';
function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item){
    setItems((items) => [...items,item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id){
    setItems(
      (items) => items.map(
        (item) => item.id === id ? (
          {...item, packed:!item.packed}
        )
        : item
      )
    )
  }

  function handleClear(){
    const confirmed = window.confirm('Are you sure? This will delete all the items.');
    if(confirmed)setItems([]);
  }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItem ={handleAddItems}/>
      <PackingList 
        items = {items} 
        onDeleteItem = {handleDeleteItem} 
        onToggleItem = {handleToggleItem}
        onClearItems = {handleClear}
      />
      <Stats items = {items}/>
    </div>
  )
}

export default App;
