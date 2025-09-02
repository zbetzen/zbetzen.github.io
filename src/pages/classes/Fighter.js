import LevelUpRollTable from "./LevelUpRollTable";

const Fighter = () => {
  const myItems = [
    'Str',
    'Dex',
    'Con',
    'd6 Effort',
    'd8 Effort',
    'd12 Effort'
  ];

    return (
      <div class="bodyElement">
        <h1>Fighter</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Fighter;