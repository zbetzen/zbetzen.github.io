import LevelUpRollTable from "./LevelUpRollTable";

const LevyTroop = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 4, advance: 'Con'},
    {id: 5, advance: 'Dex'},
    {id: 7, advance: 'd6 Effort'},
    {id: 7, advance: 'd6 Effort'},
    {id: 8, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Levy Troop</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };
  
  export default LevyTroop;