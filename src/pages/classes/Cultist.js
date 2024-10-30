import LevelUpRollTable from "./LevelUpRollTable";

const Cultist = () => {
  const myItems = [
    {id: 2, advance: 'Con'},
    {id: 3, advance: 'Wis'},
    {id: 4, advance: 'Cha'},
    {id: 5, advance: 'Cha'},
    {id: 6, advance: 'd4 Effort'},
    {id: 7, advance: 'd6 Effort'},
    {id: 8, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Cultist</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Cultist;