export default function Stats({items}) {
    if(!items.length) {
      return <em>Start Adding some Items 🚀</em>
    }
    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const packedPerc = Math.round(packedItems/numItems) * 100;
    return (
      <footer className="stats">
         { packedPerc === 100 ? 
              <em>All the items are packed, You are all set!</em> :
              <em>You Have {numItems} on your list, and you already Packed {packedItems} items ({packedPerc}%)</em>
          }
      </footer>
    )
  }