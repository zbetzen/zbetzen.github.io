import LevelUpRollTable from "./LevelUpRollTable";

const Scholar = () => {
  const myItems = [
    'Con',
    'Int',
    'Wis',
    'd8 Effort',
    'd10 Effort',
    'd12 Effort'
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