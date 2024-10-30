import LevelUpRollTable from "./LevelUpRollTable";

const Noble = () => {
  const myItems = [
    {id: 2, advance: 'Int'},
    {id: 3, advance: 'Cha'},
    {id: 4, advance: 'd8 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Noble</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Noble;