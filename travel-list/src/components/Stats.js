export default function Stats({ items }) {
    if (!items.length) {
      return <em>Start adding some items 🚀</em>;
    }
    
    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const packedPerc = Math.round((packedItems / numItems) * 100);
  
    return (
      <footer className="stats">
        {packedPerc === 100 ? (
          <em>All the items are packed. You are all set!</em>
        ) : packedPerc === 0 ? (
          <em>Start packing some items...</em>
        ) : (
          <em>
            You have {numItems} items on your list, and you've already packed {packedItems} items ({packedPerc}%)
          </em>
        )}
      </footer>
    );
}