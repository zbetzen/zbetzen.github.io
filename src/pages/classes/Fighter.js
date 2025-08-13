import LevelUpRollTable from "./LevelUpRollTable";

const Fighter = () => {
  const myItems = [
    {advance: 'Str'},
    {advance: 'Dex'},
    {advance: 'Con'},
    {advance: 'd6 Effort'},
    {advance: 'd8 Effort'},
    {advance: 'd12 Effort'}
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