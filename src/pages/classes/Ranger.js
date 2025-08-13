import LevelUpRollTable from "./LevelUpRollTable";

const Ranger = () => {
  const myItems = [
    {advance: 'Dex'},
    {advance: 'Con'},
    {advance: 'Wis'},
    {advance: 'd4 Effort'},
    {advance: 'd6 Effort'},
    {advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Ranger</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Ranger;