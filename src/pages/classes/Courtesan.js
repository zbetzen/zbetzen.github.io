import LevelUpRollTable from "./LevelUpRollTable";

const Courtesan = () => {
  const myItems = [
    {id: 2, advance: 'Wis'},
    {id: 3, advance: 'Cha'},
    {id: 4, advance: 'Cha'},
    {id: 5, advance: 'd8 Effort'},
    {id: 6, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Courtesan</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Courtesan;