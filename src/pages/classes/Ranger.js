import LevelUpRollTable from "./LevelUpRollTable";

const Ranger = () => {
  const myItems = [
    'Dex',
    'Con',
    'Wis',
    'd4 Effort',
    'd6 Effort',
    'd12 Effort'
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