import LevelUpRollTable from "./LevelUpRollTable";

const Explorer = () => {
  const myItems = [
    {advance: 'Dex'},
    {advance: 'Con'},
    {advance: 'Wis'},
    {advance: 'Cha'},
    {advance: 'd6 Effort'},
    {advance: 'd10 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Explorer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Explorer;