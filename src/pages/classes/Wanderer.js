import LevelUpRollTable from "./LevelUpRollTable";

const Wanderer = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 3, advance: 'Dex'},
    {id: 4, advance: 'Con'},
    {id: 5, advance: 'Int'},
    {id: 6, advance: 'Wis'},
    {id: 7, advance: 'Cha'},
    {id: 8, advance: 'd4 Effort'},
    {id: 9, advance: 'd6 Effort'},
    {id: 10, advance: 'd8 Effort'},
    {id: 11, advance: 'd10 Effort'},
    {id: 12, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Wanderer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Wanderer;