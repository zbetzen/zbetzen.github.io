import LevelUpRollTable from "./LevelUpRollTable";

const Hermit = () => {
  const myItems = [
    {id: 3, advance: 'Dex'},
    {id: 4, advance: 'Con'},
    {id: 6, advance: 'Wis'},
    {id: 8, advance: 'd4 Effort'},
    {id: 8, advance: 'd4 Effort'}
  ];

    return (
      <>
        <h1>Hermit</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Hermit;