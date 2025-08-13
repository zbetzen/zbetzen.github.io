import LevelUpRollTable from "./LevelUpRollTable";

const Cleric = () => {
  const myItems = [
    {advance: 'Con'},
    {advance: 'Wis'},
    {advance: 'Cha'},
    {advance: 'd4 Effort'},
    {advance: 'd10 Effort'},
    {advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Cleric</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Cleric;