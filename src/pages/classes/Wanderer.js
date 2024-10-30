import LevelUpRollTable from "./LevelUpRollTable";

const Wanderer = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 3, advance: 'Dex'},
    {id: 4, advance: 'Con'},
    {id: 5, advance: 'Wis'},
    {id: 6, advance: 'd4 Effort'},
    {id: 7, advance: 'd4 Effort'},
    {id: 8, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Wanderer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Wanderer;