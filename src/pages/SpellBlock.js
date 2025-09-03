function SpellBlock({ spells }) {
  return (
    <div>
      {spells.map((item, index) => 
        <div>
          <h2>{index + 1}. {item.title}</h2>
          <p>{item.description}</p>
          <p>{item.effect}</p>
        </div>
      )}
    </div>
  );
}
  
  export default SpellBlock;