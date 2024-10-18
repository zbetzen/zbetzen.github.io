import LevelUpRollTable from "./LevelUpRollTable";

const Carter = () => {
  const myItems = [
    {id: 2, advance: 'Con'},
    {id: 3, advance: 'Con'},
    {id: 4, advance: 'Wis'},
    {id: 5, advance: 'd4 Effort'},
    {id: 6, advance: 'd6 Effort'}
  ];

    return (
      <>
        <h1>Carter</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Carter;