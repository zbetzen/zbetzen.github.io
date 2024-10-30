import LevelUpRollTable from "./LevelUpRollTable";

const Conscript = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 4, advance: 'Con'},
    {id: 5, advance: 'Dex'},
    {id: 7, advance: 'd6 Effort'},
    {id: 7, advance: 'd6 Effort'},
    {id: 8, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Conscript</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };
  
  export default Conscript;