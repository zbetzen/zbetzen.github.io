import LevelUpRollTable from "./LevelUpRollTable";

const Scholar = () => {
  const myItems = [
    {id: 2, advance: 'Con'},
    {id: 3, advance: 'Int'},
    {id: 4, advance: 'Int'},
    {id: 5, advance: 'Wis'},
    {id: 6, advance: 'Cha'},
    {id: 7, advance: 'd8 Effort'},
    {id: 8, advance: 'd10 Effort'},
    {id: 9, advance: 'd10 Effort'},
    {id: 10, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Scholar</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Scholar;