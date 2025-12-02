import LevelUpRollTable from "./LevelUpRollTable";

const Cleric = () => {
  const myItems = [
    'Con',
    'Wis',
    'Cha',
    'Cha',
    'd4 Effort',
    'd10 Effort',
    'd12 Effort',
    'd12 Effort'
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