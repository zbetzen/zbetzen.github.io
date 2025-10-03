import LevelUpRollTable from "./LevelUpRollTable";

const Adventurer = () => {
  const myItems = [
    'Str',
    'Dex',
    'Con',
    'Int',
    'Wis',
    'Cha',
    'd4 Effort',
    'd6 Effort',
    'd8 Effort',
    'd10 Effort',
    'd12 Effort',
    'd12 Effort'
  ];

    return (
      <div class="bodyElement">
        <h1>Adventurer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Adventurer;