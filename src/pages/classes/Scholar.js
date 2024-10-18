import LevelUpRollTable from "./LevelUpRollTable";

const Scholar = () => {
  const myItems = [
    {id: 2, advance: 'Int'},
    {id: 3, advance: 'd10 Effort'},
    {id: 4, advance: 'd10 Effort'}
  ];

    return (
      <>
        <h1>Scholar</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Scholar;