import LevelUpRollTable from "./LevelUpRollTable";

const Hunter = () => {
  const myItems = [
    {id: 2, advance: 'Dex'},
    {id: 3, advance: 'Con'},
    {id: 4, advance: 'Wis'},
    {id: 5, advance: 'Wis'},
    {id: 6, advance: 'd4 Effort'},
    {id: 7, advance: 'd6 Effort'},
    {id: 8, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Hunter</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Hunter;