import LevelUpRollTable from "./LevelUpRollTable";

const Rogue = () => {
  const myItems = [
    {advance: 'Dex'},
    {advance: 'Wis'},
    {advance: 'd4 Effort'},
    {advance: 'd6 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Rogue</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Rogue;